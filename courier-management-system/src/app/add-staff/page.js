"use client";
import { useState } from "react";

export default function AddBranchStaff() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    role: "",
    branch: "",
    age: "",
    gender: "",
  });

  const branches = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Staff Data:", formData);
    alert("Staff member added successfully!");
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      role: "",
      branch: "",
      age: "",
      gender: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 flex justify-center items-start">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Add New Branch Staff
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-5 justify-between">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="flex-1 min-w-[320px] max-w-[45%] p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="flex-1 min-w-[320px] max-w-[45%] p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact Number"
            className="flex-1 min-w-[320px] max-w-[45%] p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="flex-1 min-w-[320px] max-w-[45%] p-3 border border-gray-300 rounded"
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="flex-1 min-w-[320px] max-w-[45%] p-3 border border-gray-300 rounded"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {/* Role Selection */}
          <div className="flex flex-col min-w-[320px] max-w-[45%]">
            <label className="font-medium text-gray-700 mb-1">Select Role</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="Staff Member"
                  checked={formData.role === "Staff Member"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Staff Member
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="Delivery Boy"
                  checked={formData.role === "Delivery Boy"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Delivery Boy
              </label>
            </div>
          </div>

          {/* Branch Dropdown */}
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="flex-1 min-w-[320px] max-w-[45%] p-3 border border-gray-300 rounded"
            required
          >
            <option value="">Select Branch</option>
            {branches.map((branch, index) => (
              <option key={index} value={branch}>
                {branch}
              </option>
            ))}
          </select>

          {/* Buttons */}
          <div className="w-full flex justify-between mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-400 text-white px-6 py-3 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
