import React from 'react';
import './Attendence.css';

const Attendance = () => {
    return (
        <div className="attendance-container">
            <header className="header">
                <h2>Attendance</h2>
            </header>
            <main className="main-content">
                <p>Date: 22-Aug-2024</p>
                <p>Status: Present</p>
                {/* Add more attendance data or functionality as needed */}
            </main>
        </div>
    );
};

export default Attendance;
