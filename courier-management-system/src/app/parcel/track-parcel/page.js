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
                    </div>
                )}
            </div>
        </div>
    );

}

export default TrackParcel;
