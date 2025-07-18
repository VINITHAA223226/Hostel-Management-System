import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Attendance from './Attendence';
import ComplaintsFeedback from './Feedback';
import LeaveManagement from './LeaveManagement';
import RoomDetails from './RoomDetails';
import './StudentDashboard.css';

const StudentPortal = () => {
    const studentName = "AAA"; 
    const rollNumber = "123456789"; 

    return (
        <div className="student-portal-container">
            <header className="header">
                <img src="/logo1.png" alt="BIT Logo" className="logo" />
                <h1>Bannari Amman Institute of Technology - Student Portal</h1>
            </header>
            <nav className="navbar">
                <Link to="/student/room-details" className="nav-button">Room Details</Link>
                <Link to="/student/leave-management" className="nav-button">Leave Management</Link>
                <Link to="/student/attendance" className="nav-button">Attendance</Link>
                <Link to="/student/complaints-feedback" className="nav-button">Complaints / Feedback</Link>
                <Link to="/login" className="nav-button">Logout</Link>
            </nav>
            <main className="main-content">
                <Routes>
                    <Route path="/room-details" element={<RoomDetails />} />
                    <Route path="/leave-management" element={<LeaveManagement />} />
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/complaints-feedback" element={<ComplaintsFeedback />} />
                    <Route path="/" element={
                        <div>
                            <h2>Welcome, {studentName}</h2>
                            <p>Roll Number: {rollNumber}</p>
                        </div>
                    } />
                </Routes>
            </main>
        </div>
    );
};

export default StudentPortal;
