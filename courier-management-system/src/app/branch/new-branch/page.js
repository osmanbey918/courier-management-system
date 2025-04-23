"use client";
import { Building2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        branchName: "", // ✅ NEW FIELD
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        contact: "",
        password: "",
    });


    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset error

        const branchCode = Math.floor(1000 + Math.random() * 9000); // Generate random code

        try {
            const response = await axios.post('/api/branch', { ...formData, branchCode });
            console.log("✅ Branch created with code:", branchCode);
            router.push("/branch/branch-list");
        } catch (err) {
            console.error("❌ Error:", err.response?.data?.message);
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    const handleCancel = () => {
        setFormData({
            street: "",
            city: "",
            state: "",
            zipcode: "",
            country: "",
            contact: "",
            password: "",
        });
        router.push("/");
    };

    return (
        <div className="bg-[#EDE9E3]">
            <div className="p-6 min-h-[87vh]">
                {/* Header */}
                <div className="flex items-center gap-3 ml-5 mb-6 border-b-2 border-[#d4cfc7] pb-3">
                    <Building2 className="text-white bg-gray-700 p-1 rounded-full w-8 h-8" />
                    <h1 className="text-3xl font-semibold text-gray-800">New Branch</h1>
                </div>

                {/* Form */}
                <div className="flex justify-center">
                    <div className="shadow-xl rounded-xl p-8 w-full">
                        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                            Enter Branch Details
                        </h2>

                        {error && (
                            <div className="bg-red-100 text-red-600 p-3 mb-4 rounded text-center">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-wrap justify-between gap-6">
                            {[
                                { name: "branchName", placeholder: "Branch Name" }, // ✅ added at top
                                { name: "street", placeholder: "Street" },
                                { name: "city", placeholder: "City" },
                                { name: "state", placeholder: "State" },
                                { name: "zipcode", placeholder: "Zip Code" },
                                { name: "country", placeholder: "Country" },
                                { name: "contact", placeholder: "Contact" },
                                { name: "email", placeholder: "Email" },
                                { name: "password", placeholder: "Set a Password", type: "password" },
                            ].map((field) => (
                                <input
                                    key={field.name}
                                    type={field.type || "text"}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    className="flex-1 min-w-[calc(45%+40px)] max-w-[100%] p-3 border border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            ))}

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
