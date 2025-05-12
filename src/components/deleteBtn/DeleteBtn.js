'use client';

import axios from 'axios';
import { DeleteIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DeleteBtn({ id, status }) {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            const endpoint =
                status === 'branch'
                    ? 'http://localhost:3000/api/branch'
                    : 'http://localhost:3000/api/parcel';

            const res = await axios.delete(endpoint, {
                headers: { 'Content-Type': 'application/json' },
                data: { id },
            });

            console.log('✅ Deleted:', res.data);
            router.refresh();
        } catch (err) {
            console.error('❌ Delete failed:', err.response?.data || err.message);
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 transition-colors"
            title="Delete"
        >
            <DeleteIcon />
        </button>
    );
}
