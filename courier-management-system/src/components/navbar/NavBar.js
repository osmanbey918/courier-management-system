"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import axios from "axios";

export default function NavBar() {
  const [role, setRole] = useState(null)
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    async function getRole() {
      const data = await axios.get('/api/role');
      setRole(data.data)
    }
    getRole();

  }, [])
  console.log(role);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value) router.push(value);
  };

  return (
    <div className="flex bg-gray-900">
      {/* Hamburger Menu */}
      {isMobile && (
        <button
          className="fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white w-64 p-4 transition-transform duration-300 ease-in-out 
          ${isMobile
            ? `fixed top-0 left-0 h-full z-40 transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`
            : "h-screen relative"}`}
      >
        <div className="text-2xl font-bold mb-6">📦 Courier Admin</div>

        <button className="p-2 text-left hover:bg-gray-700 block w-full" onClick={() => router.push(`/dashboard/${role}`)}>
          🏠 Dashboard
        </button>

        {/* Branch */}
        {role === 'admin'? <div className="mt-4">
          <label htmlFor="branch-select" className="block text-sm mb-1">🏢 Branch</label>
          <select id="branch-select" className="bg-gray-700 w-full p-2 rounded" onChange={handleSelectChange}>
            <option value="">Select</option>
            <option value="/new-branch">➕ Add New Branch</option>
            <option value="/branch-list">📃 Branch List</option>
          </select>
        </div>: ''}
        

        {/* Staff */}
        <div className="mt-4">
          <label htmlFor="staff-select" className="block text-sm mb-1">👨‍💼 Branch Staff</label>
          <select id="staff-select" className="bg-gray-700 w-full p-2 rounded" onChange={handleSelectChange}>
            <option value="">Select</option>
            <option value="/add-staff">➕ Add Staff</option>
            <option value="/staff-list">📃 Staff List</option>
          </select>
        </div>

        {/* Parcel */}
        <div className="mt-4">
          <label htmlFor="parcel-select" className="block text-sm mb-1">📦 Parcels</label>
          <select id="parcel-select" className="bg-gray-700 w-full p-2 rounded" onChange={handleSelectChange}>
            <option value="">Select</option>
            <option value="/track-parcel">📍 Track Parcel</option>
            <option value="/parcel-list">📃 Parcel List</option>
          </select>
        </div>

        {/* Other Links */}
        <button className="p-2 text-left hover:bg-gray-700 mt-6 block w-full" onClick={() => router.push("/reports")}>
          📊 Reports
        </button>
      </div>

      {/* Optional Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 "
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
