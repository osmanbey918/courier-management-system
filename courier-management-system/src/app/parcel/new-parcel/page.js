'use client';

import axios from 'axios';
import { useState } from 'react';

export default function Page() {
  const [form, setForm] = useState({ id: '', status: '', location: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleStatusChange = (e) => {
    setForm({ ...form, status: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    // setForm({ ...form, branchName: }); // Default to 'Pending' if status is not set
    try {
      
      const res = await axios.post('/api/parcel', form); 
      console.log('Form data:', form); // Debugging line
      setMessage(res.data.message);
      setForm({ id: '', status: '', location: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Create New Parcel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="id"
          placeholder="Parcel ID"
          value={form.id}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Radio Buttons for Status */}
        <div className="flex space-x-4">
          <div>
            <input
              type="radio"
              id="pending"
              name="status"
              value="Pending"
              checked={form.status === 'Pending'}
              onChange={handleStatusChange}
              className="mr-2"
            />
            <label htmlFor="pending" className="text-sm">Pending</label>
          </div>
          <div>
            <input
              type="radio"
              id="inTransit"
              name="status"
              value="In Transit"
              checked={form.status === 'In Transit'}
              onChange={handleStatusChange}
              className="mr-2"
            />
            <label htmlFor="inTransit" className="text-sm">In Transit</label>
          </div>
          <div>
            <input
              type="radio"
              id="delivered"
              name="status"
              value="Delivered"
              checked={form.status === 'Delivered'}
              onChange={handleStatusChange}
              className="mr-2"
            />
            <label htmlFor="delivered" className="text-sm">Delivered</label>
          </div>
        </div>

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Create Parcel
        </button>
      </form>
      {message && <p className="text-green-600 mt-4">{message}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
}
