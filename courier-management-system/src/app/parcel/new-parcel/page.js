'use client';

import axios from 'axios';
import { useState } from 'react';

export default function Page() {
  const [form, setForm] = useState({
    id: '',
    status: '',
    location: '',
    weight: '',
    height: '',
    width: '',
    length: '',
    branch: '',
    senderName: '',
    receiverName: '',
    deliveryDate: '',
  });
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
      setForm({ id: '', status: '', location: '', weight: '', height: '', width: '', length: '', branch: '', senderName: '', receiverName: '', deliveryDate: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="bg-[#EDE9E3]">
        <div className="p-6 min-h-[87vh]">
            {/* Header */}
            <div className="flex items-center gap-3 ml-5 mb-6 border-b-2 border-[#d4cfc7] pb-3">
                <h1 className="text-3xl font-semibold text-gray-800"> New Parcel</h1>
            </div>

            {/* Form Container */}
            <div className="flex justify-center">
                <div className="shadow-xl rounded-xl p-8 w-full">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                        Enter Parcel Details
                    </h2>

                    <form onSubmit={handleSubmit} className="flex flex-wrap justify-between gap-6">
                        {[
                            { name: "id", placeholder: "Parcel ID" },
                            { name: "senderName", placeholder: "Sender Name" },
                            { name: "receiverName", placeholder: "Receiver Name" },
                            { name: "deliveryDate", placeholder: "Delivery Date", type: "date" },
                            { name: "location", placeholder: "Location" },
                            { name: "weight", placeholder: "Weight (kg)", type: "number" },
                            { name: "height", placeholder: "Height (cm)", type: "number" },
                            { name: "width", placeholder: "Width (cm)", type: "number" },
                            { name: "length", placeholder: "Length (cm)", type: "number" },
                            { name: "branch", placeholder: "Branch" },
                        ].map((field) => (
                            <input
                                key={field.name}
                                type={field.type || "text"}
                                name={field.name}
                                value={form[field.name]}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                className="flex-1 min-w-[calc(45%+40px)] max-w-[100%] p-3 border border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        ))}

                        {/* Radio Buttons for Status */}
                        <div className="w-full flex justify-between mt-6">
                            {["Pending", "In Transit", "Delivered"].map((status) => (
                                <div key={status} className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id={status}
                                        name="status"
                                        value={status}
                                        checked={form.status === status}
                                        onChange={handleStatusChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor={status} className="text-lg">
                                        {status}
                                    </label>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="w-full flex flex-col sm:flex-row justify-between mt-6 gap-4">
                            <button
                                type="submit"
                                className="flex-1 bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition"
                            >
                                Create Parcel
                            </button>
                            <button
                                type="button"
                                onClick={() => setForm({ ...form, ...Object.keys(form).reduce((acc, key) => ({ ...acc, [key]: '' }), {}) })}
                                className="flex-1 bg-gray-500 text-white py-3 rounded-lg text-lg hover:bg-gray-600 transition"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                    {message && <p className="text-green-600 mt-4">{message}</p>}
                    {error && <p className="text-red-600 mt-4">{error}</p>}
                </div>
            </div>
        </div>
    </div>
  );
}
