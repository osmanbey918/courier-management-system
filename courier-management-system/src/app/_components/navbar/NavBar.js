"use client"
import { useState } from "react";
import Card from "../card/Card";
import Link from "next/link";
// import Dashboard from "../dashboard/Dashboard"; // Ensure this exists

export default function NavBar() {
  const [content, setContent] = useState("Home");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col h-full">
        <div className="p-4 text-2xl font-bold">Logo</div>
        <Link href="/dashboard">Home</Link>
        <select className=" bg-gray-800">
          <option>Branch</option>
          <option>Add new Branch</option>
          <option>List</option>
        </select>
        <select className=" bg-gray-800">
          <option><Link href="">Branch Staff</Link></option>
          <option><Link href="">Branch Staff</Link></option>
          <option><Link href="">Branch Staff</Link></option>
        </select>
        <select className=" bg-gray-800">
          <option><Link href="">Parcels</Link></option>
          <option><Link href="">Branch Staff</Link></option>
          <option><Link href="">Branch Staff</Link></option>
        </select>
        <Link href="">Track Parcel</Link>
        <Link href="">Reports</Link>
      </div>


    </div>
  );
}
