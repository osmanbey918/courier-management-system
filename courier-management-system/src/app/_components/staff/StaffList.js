import React, { useEffect, useState } from 'react';

const StaffList = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        // Fetch staff data from an API or backend
        fetch('/api/staff') // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => setStaff(data))
            .catch(error => console.error('Error fetching staff:', error));
    }, []);

    return (
        <div>
            <h1>Staff List</h1>
            <ul>
                {staff.map((member, index) => (
                    <li key={index}>
                        {member.name} - {member.position}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StaffList;
