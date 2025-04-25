'use client';
import React, { useState } from 'react';
import axios from "axios";
import DeleteBtn from '@/components/deleteBtn/DeleteBtn';

function TrackParcel() {
    const [parcelId, setParcelId] = useState('');
    const [parcelData, setParcelData] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setParcelId(e.target.value);
    };

    const handleTrackParcel = async () => {
        try {
            setError('');
            setParcelData(null);
            console.log('iam');

            const response = await axios.get(`/api/parcel?id=${parcelId}`);
            setParcelData(response.data);
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className=" bg-gray-100  flex flex-col ">
            <div className="w-full max-w-xl rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    📦 Track Your Parcel
                </h1>

                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        value={parcelId}
                        onChange={handleInputChange}
                        placeholder="Enter Parcel ID"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <button
                        onClick={handleTrackParcel}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                        Track
                    </button>
                </div>

                {error && (
                    <p className="mt-4 text-red-500 text-center font-medium">{error}</p>
                )}

                {parcelData && (
                    <div
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-800">
                                📝 Parcel Details
                            </h2>
                            <p><strong>ID:</strong> {parcelData.id}</p>
                            <p><strong>Status:</strong> {parcelData.status}</p>
                            <p><strong>Location:</strong> {parcelData.location}</p>
                            <p><strong>Sender:</strong> {parcelData.senderName}</p>
                            <p><strong>Receiver:</strong> {parcelData.receiverName}</p>
                            <p><strong>Weight:</strong> {parcelData.weight} kg</p>
                            <p><strong>Dimensions:</strong> {parcelData.length}x{parcelData.width}x{parcelData.height} cm</p>
                            <p><strong>Delivery Date:</strong> {parcelData.deliveryDate}</p>
                            <p><strong>Branch:</strong> {parcelData.branch}</p>
                            <DeleteBtn id={parcelData.id} status="parcel" />
                        </div>
                        {/* Status Update Form (for admin/staff) */}
                        <StatusUpdateForm parcelId={parcelData.id} />
                        {/* Status History Timeline */}
                        <StatusHistoryTimeline statusHistory={parcelData.statusHistory} />
                    </div>
                )}
            </div>
        </div>
    );

}

export default TrackParcel;

// Status Update Form Component
function StatusUpdateForm({ parcelId }) {
    const [status, setStatus] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        const updatedBy = localStorage.getItem('branchCode') || 'Unknown';
        try {
            console.log('Updating parcel status...', parcelId, status, location, updatedBy);
            
            await axios.post(`/api/parcel/update/${parcelId}`, { status, location, updatedBy });
            setMessage('Status updated successfully!');
        } catch (err) {
            setMessage('Failed to update status.');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Update Parcel Status</h3>
            <div className="flex flex-col sm:flex-row gap-2 mb-2">
                <select value={status} onChange={e => setStatus(e.target.value)} required className="flex-1 px-2 py-1 rounded">
                    <option value="">Select Status</option>
                    <option value="Pending">Pending</option>
                    <option value="In Transit">In Transit</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Submitted">Submitted</option>
                    <option value="Picked Up by Rider">Picked Up by Rider</option>
                    <option value="Arrived at Branch">Arrived at Branch</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                </select>
                <input type="text" value={location} onChange={e => setLocation(e.target.value)} required placeholder="Location" className="flex-1 px-2 py-1 rounded" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update Status</button>
            {message && <p className="mt-2 text-sm">{message}</p>}
        </form>
    );
}

// Status History Timeline Component
function StatusHistoryTimeline({ statusHistory }) {
    if (!statusHistory || statusHistory.length === 0) return null;
    return (
        <div className="mt-8">
            <h3 className="font-semibold mb-2">Status History</h3>
            <ul className="border-l-2 border-blue-400 pl-4">
                {statusHistory.map((entry, idx) => (
                    <li key={idx} className="mb-4 relative">
                        <div className="absolute -left-3 top-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div className="bg-white p-3 rounded shadow">
                            <p><strong>Status:</strong> {entry.status}</p>
                            <p><strong>Location:</strong> {entry.location}</p>
                            <p><strong>Updated By:</strong> {entry.updatedBy}</p>
                            <p><strong>Time:</strong> {new Date(entry.timestamp).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
