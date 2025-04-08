"use client";
import { Building2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Page() {
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Branch Data:", formData);
        try {
            const response = await axios.post('/api/branch', formData);
            console.log("we done");
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    }

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
        <div className=" bg-[#EDE9E3] min-h-auto">
            <div className="p-6 min-h-[max-content]">
                {/* Header */}
                <div className="flex items-center gap-3 ml-5 mb-6 border-b-2 border-[#d4cfc7] pb-3">
                    <Building2 className="text-white bg-gray-700 p-1 rounded-full w-8 h-8" />
                    <h1 className="text-3xl font-semibold text-gray-800">New Branch</h1>
                </div>

                {/* Form Container */}
                <div className="flex justify-center  ">
                    <div className=" shadow-xl rounded-xl p-8 w-full ">
                        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                            Enter Branch Details
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-wrap justify-between gap-6 "
                        >
                            {[
                                { name: "street", placeholder: "Street" },
                                { name: "city", placeholder: "City" },
                                { name: "state", placeholder: "State" },
                                { name: "zipcode", placeholder: "Zip Code" },
                                { name: "country", placeholder: "Country" },
                                { name: "contact", placeholder: "Contact" },
                            ].map((field) => (
                                <input
                                    key={field.name}
                                    type="text"
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    className="flex-1 min-w-[300px] max-w-[48%] p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            ))}

                            {/* Buttons */}
                            <div className="w-full flex flex-col sm:flex-row justify-between mt-6 gap-4">
                                <button
                                    type="submit"
                                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="flex-1 bg-gray-500 text-white py-3 rounded-lg text-lg hover:bg-gray-600 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}