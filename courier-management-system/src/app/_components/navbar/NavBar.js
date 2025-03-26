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
      <div className="w-64 bg-gray-800 text-white flex flex-col fixed h-full">
        <div className="p-4 text-2xl font-bold">Logo</div>
        <nav className="flex-1">
          <ul>
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li
                key={item}
                className={`p-4 cursor-pointer ${
                  content === item ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
                onClick={() => setContent(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 ml-64">
        {content === "Home" && <Card no="1" heading="Welcome to Home" />}
        {content === "About" && (
          <div>
            <h2 className="text-xl font-bold">About Us</h2>
            <Link href="/dashboard">Go to Dashboard</Link>
          </div>
        )}
        {/* {content === "Services" && <Dashboard />} */}
        {content === "Contact" && <div>📞 Contact Us at example@xyz.com</div>}
      </div>
    </div>
  );
}
