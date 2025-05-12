"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AddBranchStaff() {
  const [branches, setBranches] = useState([]);
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get("/api/branch");
        const branchList = response.data.map((branch) =>
          `${branch.city}, ${branch.street}`
        );
        setBranches(branchList);
      } catch (error) {
        console.error("❌ Error fetching branches:", error);
      }
    };

    fetchBranches();
  }, []);
  console.log("Branches:", branches); // Debugging line
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    role: "",
    branch: "",
    age: "",
    gender: "",
  });




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Staff Data:", formData);
  
    try {
      const res = await axios.post("/api/staff", formData);
      console.log("Staff created successfully:", res.data);
      alert("Staff created successfully!");
  
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        contact: "",
        role: "",
        branch: "",
        age: "",
      });
    } catch (error) {
      console.error("Error creating staff:", error);
      alert("Something went wrong while creating the staff.");
    }
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
    <div>
      <div className="bg-[#EDE9E3] p-6 min-h-[87vh]">
        <div className="flex items-center gap-3 ml-5 mb-6 border-b-2 border-[#d4cfc7] pb-3">
          <h1 className="text-3xl font-semibold text-gray-800">New Branch Staff</h1>
        </div>

        <div className=" flex justify-center  ">
          <div className=" shadow-xl rounded-xl p-8 w-full ">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
              Enter Staff Details
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-6 justify-between">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="flex-1 min-w-[calc(45%+40px)] max-w-[100%] p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="flex-1 min-w-[calc(45%+40px)] max-w-[100%] p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact Number"
                className="flex-1 min-w-[calc(45%+40px)] max-w-[100%] p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                className="flex-1 min-w-[45%] max-w-[100%] p-3 border border-gray-300 rounded"
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="flex-1 min-w-[calc(45%+40px)] max-w-[100%] p-3 border border-gray-300 rounded"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              {/* Role Selection */}
              <div className="flex flex-col min-w-[calc(45%+40px)] max-w-[100%]">
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
                className="flex-1 min-w-[45%] max-w-[100%] p-3 border border-gray-300 rounded"
                required
              >
                <option value="">Select Branch</option>
                {branches && branches.map((branch, index) => (
                  <option key={index} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>

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
