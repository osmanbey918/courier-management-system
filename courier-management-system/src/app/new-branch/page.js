"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../_components/header/Header";

export default function Branch() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        contact: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Branch Data:", formData);
        alert("Branch Saved Successfully!"); // Replace with API call
    };

    // Handle Cancel
    const handleCancel = () => {
        setFormData({
            street: "",
            city: "",
            state: "",
            zipcode: "",
            country: "",
            contact: "",
        });
        router.push("/"); // Redirect
    };

    return (
        <div>
            <Header />
            <h1 className="text-4xl border-b-2 border-[#f5eae2] ml-5 text-white py-3">New Branch</h1>

            <div className="flex justify-center min-h-screen bg-gray-100 px-6">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">New Branch</h2>
                    
                    <form onSubmit={handleSubmit} className="flex flex-wrap gap-6 justify-center">
                        <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Street" className="min-w-[320px] max-w-[40%] flex-1 p-4 border border-gray-300 rounded-lg text-lg" required />
                        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="min-w-[320px] max-w-[40%] flex-1 p-4 border border-gray-300 rounded-lg text-lg" required />
                        <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="min-w-[320px] max-w-[40%] flex-1 p-4 border border-gray-300 rounded-lg text-lg" required />
                        <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} placeholder="Zip Code" className="min-w-[320px] max-w-[40%] flex-1 p-4 border border-gray-300 rounded-lg text-lg" required />
                        <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="min-w-[320px] max-w-[40%] flex-1 p-4 border border-gray-300 rounded-lg text-lg" required />
                        <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" className="min-w-[320px] max-w-[40%] flex-1 p-4 border border-gray-300 rounded-lg text-lg" required />

                        {/* Buttons */}
                        <div className="w-full flex justify-between mt-6">
                            <button type="submit" className="w-1/2 bg-blue-600 text-white p-4 rounded-lg text-lg hover:bg-blue-700 transition">Save</button>
                            <button type="button" onClick={handleCancel} className="w-1/2 bg-gray-400 text-white p-4 rounded-lg text-lg hover:bg-gray-500 transition ml-2">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="text-center text-white py-5 bg-gray-900 mt-5">
                <h1 className="text-lg">Courier Management System</h1>
            </div>
        </div>
    );
}
