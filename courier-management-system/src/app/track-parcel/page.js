import React, { useState } from 'react';

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
            const response = await fetch(`/api/track-parcel/${parcelId}`);
            if (!response.ok) {
                throw new Error('Parcel not found');
            }
            const data = await response.json();
            setParcelData(data);
        } catch (err) {
            setError(err.message);
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
