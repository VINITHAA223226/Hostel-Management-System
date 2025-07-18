import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ManageRooms.css';

const hostelData = {
    Pearl: [
        { roomNumber: '101', floor: 1, type: '3 cot', status: 'Available' },
        { roomNumber: '102', floor: 1, type: '5 cot', status: 'Occupied' },
    ],
    Ruby: [
        { roomNumber: '201', floor: 2, type: '4 cot', status: 'Available' },
        { roomNumber: '202', floor: 2, type: '6 cot', status: 'Occupied' },
    ],
    Diamond: [
        { roomNumber: '301', floor: 3, type: '5 cot', status: 'Available' },
        { roomNumber: '302', floor: 3, type: '4 cot', status: 'Occupied' },
    ],
    Emerald: [
        { roomNumber: '401', floor: 4, type: '3 cot', status: 'Available' },
        { roomNumber: '402', floor: 4, type: '5 cot', status: 'Occupied' },
    ],
    Sapphire: [
        { roomNumber: '501', floor: 5, type: '6 cot', status: 'Available' },
        { roomNumber: '502', floor: 5, type: '3 cot', status: 'Occupied' },
    ]
};

const ManageRooms = () => {
    const { hostelName } = useParams();
    const navigate = useNavigate();
    const rooms = hostelData[hostelName] || [];

    const handleBackClick = () => {
        navigate(-1); 
    };

    return (
        <div className="manage-rooms-container">
            <header className="header">
                <h2>Manage Rooms for {hostelName}</h2>
            </header>
            <main className="main-content">
                <table className="rooms-table">
                    <thead>
                        <tr>
                            <th>Room Number</th>
                            <th>Floor</th>
                            <th>Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.length > 0 ? (
                            rooms.map(room => (
                                <tr key={room.roomNumber}>
                                    <td>{room.roomNumber}</td>
                                    <td>{room.floor}</td>
                                    <td>{room.type}</td>
                                    <td>{room.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No rooms available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <button className="back-button" onClick={handleBackClick}>
                    Back
                </button>
            </main>
        </div>
    );
};

export default ManageRooms;
