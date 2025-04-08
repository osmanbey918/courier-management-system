"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function StaffList() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get("/api/staff");
        setStaff(response.data);
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };

    fetchStaff();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 overflow-x-auto">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl mx-auto">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
      Branch Staff List
    </h2>
    <table className="w-full border-collapse border border-gray-300 min-w-[800px]">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-3 border">Name</th>
          <th className="p-3 border">Email</th>
          <th className="p-3 border">Contact</th>
          <th className="p-3 border">Role</th>
          <th className="p-3 border">Branch</th>
          <th className="p-3 border">Age</th>
          <th className="p-3 border">Gender</th>
        </tr>
      </thead>
      <tbody>
        {staff.map((member, index) => (
          <tr key={index} className="text-center">
            <td className="p-2 border">{member.name}</td>
            <td className="p-2 border">{member.email}</td>
            <td className="p-2 border">{member.contact}</td>
            <td className="p-2 border">{member.role}</td>
            <td className="p-2 border">{member.branch}</td>
            <td className="p-2 border">{member.age}</td>
            <td className="p-2 border">{member.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}
