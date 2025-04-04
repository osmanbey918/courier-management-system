'use client';
import React, { useState } from 'react';
import axios from "axios";

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
            const response = await axios.get(`/api/parcel?id=${parcelId}`); 
            setParcelData(response.data); 
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred'); 
        }
    };

    return (
        <div>
            <h1>Track Your Parcel</h1>
            <input
                type="text"
                placeholder="Enter Parcel ID"
                value={parcelId}
                onChange={handleInputChange}
            />
            <button onClick={handleTrackParcel}>Track</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {parcelData && (
                <div>
                    <h2>Parcel Details</h2>
                    <p>ID: {parcelData.id}</p>
                    <p>Status: {parcelData.status}</p>
                    <p>Location: {parcelData.location}</p>
                </div>
            )}
        </div>
    );
}

export default TrackParcel;
