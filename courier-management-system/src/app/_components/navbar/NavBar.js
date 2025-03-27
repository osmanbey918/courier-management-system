"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      {/* Hamburger Button (Only in Mobile) */}
      {isMobile && (
        <button
          className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Sidebar (Fixed on Mobile, Normal on Desktop) */}
      <div
        className={`bg-gray-800 text-white w-64 p-4 transition-transform duration-300 ease-in-out 
          ${isMobile ? "fixed top-0 left-0 h-full z-40 transform " + (isOpen ? "translate-x-0" : "-translate-x-full") : "h-screen relative"}`}
      >
        <div className="text-2xl font-bold mb-4">Logo</div>

        <button className="p-2 text-left hover:bg-gray-700 block" onClick={() => router.push("/dashboard")}>
          Home
        </button>

        {/* Dropdowns */}
        <select className="bg-gray-800 text-white p-2 mt-2 block" onChange={(e) => router.push(e.target.value)}>
          <option value="">Branch</option>
          <option value="/new-branch">Add new Branch</option>
          <option value="/branch-list">List</option>
        </select>

        <select className="bg-gray-800 text-white p-2 mt-2 block" onChange={(e) => router.push(e.target.value)}>
          <option value="">Branch Staff</option>
          <option value="/staff-list">Staff List</option>
          <option value="/add-staff">Add Staff</option>
        </select>

        <select className="bg-gray-800 text-white p-2 mt-2 block" onChange={(e) => router.push(e.target.value)}>
          <option value="">Parcels</option>
          <option value="/track-parcel">Track Parcel</option>
          <option value="/parcel-list">Parcel List</option>
        </select>

        {/* Other Links */}
        <button className="p-2 text-left hover:bg-gray-700 mt-2 block" onClick={() => router.push("/track-parcel")}>
          Track Parcel
        </button>
        <button className="p-2 text-left hover:bg-gray-700 mt-2 block" onClick={() => router.push("/reports")}>
          Reports
        </button>
      </div>
    </div>
  );
}
