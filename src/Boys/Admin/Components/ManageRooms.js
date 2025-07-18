import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ManageRooms.css';

const hostelData = {
    Pearl: [
        { roomNumber: '101', floor: 1, type: '3 cot', status: 'Available', students: [
            { name: 'Aarav', rollNumber: 'CS112' },
            { name: 'Rahul', rollNumber: 'CT113' },
            { name: 'Karan', rollNumber: 'IT114' }
        ]},
        { roomNumber: '102', floor: 1, type: '5 cot', status: 'Occupied', students: [
            { name: 'Harsh', rollNumber: 'EC115' },
            { name: 'Vikram', rollNumber: 'EE116' },
            { name: 'Manish', rollNumber: 'CB117' },
            { name: 'Rajesh', rollNumber: 'SE118' },
            { name: 'Amit', rollNumber: 'CS119' }
        ]},
    ],
    Ruby: [
        { roomNumber: '201', floor: 2, type: '4 cot', status: 'Available', students: [
            { name: 'Arjun', rollNumber: 'CS120' },
            { name: 'Vikram', rollNumber: 'CT121' },
            { name: 'Raghav', rollNumber: 'IT122' },
            { name: 'Siddharth', rollNumber: 'EE123' }
        ]},
        { roomNumber: '202', floor: 2, type: '6 cot', status: 'Occupied', students: [
            { name: 'Harsh', rollNumber: 'EC124' },
            { name: 'Tanvi', rollNumber: 'SE125' },
            { name: 'Devansh', rollNumber: 'IT126' },
            { name: 'Manish', rollNumber: 'CB127' },
            { name: 'Rajesh', rollNumber: 'CS128' },
            { name: 'Vineet', rollNumber: 'EE129' }
        ]},
    ],
    Diamond: [
        { roomNumber: '301', floor: 3, type: '5 cot', status: 'Available', students: [
            { name: 'Rohit', rollNumber: 'IT130' },
            { name: 'Siddharth', rollNumber: 'CS131' },
            { name: 'Vishal', rollNumber: 'SE132' },
            { name: 'Devansh', rollNumber: 'CT133' },
            { name: 'Raghav', rollNumber: 'EC134' }
        ]},
        { roomNumber: '302', floor: 3, type: '4 cot', status: 'Occupied', students: [
            { name: 'Amit', rollNumber: 'EE135' },
            { name: 'Karan', rollNumber: 'CB136' },
            { name: 'Vineet', rollNumber: 'IT137' },
            { name: 'Rajiv', rollNumber: 'SE138' }
        ]},
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
                            <th>Student Name</th>
                            <th>Roll Number</th>
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
                                    <td>
                                        {room.students.map((student, index) => (
                                            <div key={student.rollNumber}>
                                                {student.name}
                                            </div>
                                        ))}
                                    </td>
                                    <td>
                                        {room.students.map((student, index) => (
                                            <div key={student.rollNumber}>
                                                {student.rollNumber}
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No rooms available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </main>
            <div className="back-button-container">
                <button className="back-button" onClick={handleBackClick}>
                    Back
                </button>
            </div>
        </div>
    );
};

export default ManageRooms;
