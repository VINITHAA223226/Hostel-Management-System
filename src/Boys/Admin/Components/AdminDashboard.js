import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './AdminDashboard.css';
import MailManagement from './MailManagement';
import ManageHostels from './ManageHostels';
import ManageRooms from './ManageRooms';
import ManageStudents from './ManageStudents';
import RoomComplaints from './RoomComplaints';

const AdminDashboard = () => {
    const adminName = "AAA"; 
    const adminID = "123456789";
    const adminDept = "AI & DS"; 

    return (
        <div className="admin-dashboard-container">
            <header className="header">
                <img src="/logo1.png" alt="Admin Logo" className="logo" />
                <h1>Bannari Amman Institute of Technology - Admin Dashboard</h1>
            </header>
            <nav className="navbar">
                <Link to="/admin/manage-hostels" className="nav-button">Manage Hostels</Link>
                <Link to="/admin/manage-students" className="nav-button">Manage Students</Link>
                <Link to="/admin/mail-management" className="nav-button">Mail Management</Link>
                <Link to="/admin/room-complaints" className="nav-button">Room Complaints</Link>
                <Link to="/login" className="nav-button">Logout</Link>
            </nav>
            <main className="main-content">
                <Routes>
                    <Route path="/manage-hostels" element={<ManageHostels />} />
                    <Route path="/manage-rooms/:hostelName" element={<ManageRooms />} />
                    <Route path="/manage-students" element={<ManageStudents />} />
                    <Route path="/mail-management" element={<MailManagement />} />
                    <Route path="/room-complaints" element={<RoomComplaints />} />
                    <Route path="*" element={
                        <div className="admin-details">
                            <h2>Welcome, {adminName}</h2>
                            <p>Staff ID: {adminID}</p>
                            <p>Staff Dept: {adminDept}</p>
                        </div>
                    } />
                </Routes>
            </main>
        </div>
    );
};

export default AdminDashboard;