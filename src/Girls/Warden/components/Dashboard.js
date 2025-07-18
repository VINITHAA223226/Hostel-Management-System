import React from 'react';
import './Dashboard.css';

const WardenDashboard = () => {
    // Example details for the warden's hostel name and floor number
    const hostelName = 'Emerald Hostel';
    const floorNumber = 3;

    return (
        <div className="dashboard-container">
            <h2>Warden Dashboard</h2>
            <p><strong>Hostel Name:</strong> {hostelName}</p>
            <p><strong>Floor Number:</strong> {floorNumber}</p>
            <p><strong>Total Rooms Assigned:</strong> 50</p>
            <p><strong>Pending Leave Requests:</strong> 5</p>
        </div>
    );
};

export default WardenDashboard;
