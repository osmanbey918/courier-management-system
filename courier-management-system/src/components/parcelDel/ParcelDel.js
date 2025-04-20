'use client'
import axios from "axios";
import { DeleteIcon } from "lucide-react";

export default function ParcelDel({ id }) {
    
    const handleDelete = async () => {
        console.log("Request payload:", { id }); // ✅ Log the request payload
        try {
            const res = await axios.delete("http://localhost:3000/api/parcel", {
                headers: { "Content-Type": "application/json" }, // ✅ Ensure JSON content type
                data: { id }, // ✅ Pass the `id` in the request body
            });
            console.log("Response data:", res.data); // ✅ Log the response data
            return true;
        } catch (err) {
            console.error("Delete failed:", err.response?.data || err.message); // ✅ Log server error details
            return false;
        }
    };
    return (
        <div>
            <button onClick={handleDelete}><DeleteIcon /></button>
        </div>
    )
}
