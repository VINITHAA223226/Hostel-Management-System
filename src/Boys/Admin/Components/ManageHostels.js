import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageHostels.css';

const ManageHostels = () => {
    const navigate = useNavigate();

    const handleHostelClick = (hostelName) => {
        navigate(`/admin/manage-rooms/${hostelName}`);
    };

    // Sample data for hostel details
    const hostelDetails = [
        {
            name: 'Pearl',
            students: 120,
            teachers: 10,
            occupiedRooms: { students: 50, staff: 5 },
        },
        {
            name: 'Ruby',
            students: 100,
            teachers: 8,
            occupiedRooms: { students: 45, staff: 4 },
        },
        {
            name: 'Diamond',
            students: 140,
            teachers: 12,
            occupiedRooms: { students: 60, staff: 6 },
        },
        {
            name: 'Emerald',
            students: 90,
            teachers: 7,
            occupiedRooms: { students: 40, staff: 3 },
        },
        {
            name: 'Sapphire',
            students: 110,
            teachers: 9,
            occupiedRooms: { students: 48, staff: 4 },
        },
    ];

    return (
        <div className="manage-hostels-container">
            <header className="header">
                <h2>Manage Hostel Blocks</h2>
            </header>
            <main className="main-content">
                <table className="hostel-table">
                    <thead>
                        <tr>
                            <th>Hostel Name</th>
                            <th>Number of Students</th>
                            <th>Number of Teachers</th>
                            <th>Occupied Rooms (Students)</th>
                            <th>Occupied Rooms (Staff)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hostelDetails.map((hostel) => (
                            <tr key={hostel.name}>
                                <td>{hostel.name}</td>
                                <td>{hostel.students}</td>
                                <td>{hostel.teachers}</td>
                                <td>{hostel.occupiedRooms.students}</td>
                                <td>{hostel.occupiedRooms.staff}</td>
                                <td>
                                    <button
                                        className="hostel-button"
                                        onClick={() => handleHostelClick(hostel.name)}
                                    >
                                        Manage
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default ManageHostels;
