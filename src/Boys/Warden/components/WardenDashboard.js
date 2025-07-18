import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './WardenDashboard.css';
import WardenDashboard from './Dashboard'; // Import the Dashboard component
import RoomAssignments from './RoomAssignments'; // Import the Room Assignments component
import LeaveRequests from './LeaveRequests'; // Import the Leave Requests component
import StudentIssues from './StudentIssues'; // Import the Student Issues component
import StudentAttendance from './StudentAttendance';

const WardenPortal = () => {
    const wardenName = "BBB"; 
    const wardenID = "987654321"; 
    const department = "Hostel Management"; // Example department

    return (
        <div className="warden-portal-container">
            <header className="header">
                <img src="/logo1.png" alt="Warden Logo" className="logo" />
                <h1>Bannari Amman Institute of Technology - Warden Portal</h1>
            </header>
            <nav className="navbar">
                <Link to="/warden/dashboard" className="nav-button">Dashboard</Link>
                <Link to="/warden/room-assignments" className="nav-button">Room Assignments</Link>
                <Link to="/warden/leave-requests" className="nav-button">Leave Requests</Link>
                <Link to="/warden/student-issues" className="nav-button">Student Issues</Link>
                <Link to="/warden/student-attendance" className="nav-button">Student Attendance</Link>
                <Link to="/logout" className="nav-button">Logout</Link>
            </nav>
            <main className="main-content">
                <Routes>
                    <Route path="/dashboard" element={<WardenDashboard />} />
                    <Route path="/room-assignments" element={<RoomAssignments />} />
                    <Route path="/leave-requests" element={<LeaveRequests />} />
                    <Route path="/student-issues" element={<StudentIssues />} />
                    <Route path="/student-attendance" element={<StudentAttendance />} />
                    <Route path="*" element={
                        <div className="warden-details">
                            <h2>Welcome, {wardenName}</h2>
                            <p><strong>Staff ID:</strong> {wardenID}</p>
                            <p><strong>Department:</strong> {department}</p>
                        </div>
                    } />
                </Routes>
            </main>
        </div>
    );
};

export default WardenPortal;
