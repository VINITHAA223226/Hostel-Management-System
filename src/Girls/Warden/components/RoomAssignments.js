// RoomAssignments.js
import React from 'react';
import './RoomAssignments.css';

const RoomAssignments = () => {
    const exampleAssignments = [
        { roomNumber: '101', student: 'AAA', status: 'Assigned' },
        { roomNumber: '102', student: 'BBB', status: 'Vacant' }
    ];

    return (
        <div className="room-assignments-container">
            <h2>Room Assignments</h2>
            <table className="assignments-table">
                <thead>
                    <tr>
                        <th>Room Number</th>
                        <th>Student</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {exampleAssignments.map((assignment, index) => (
                        <tr key={index}>
                            <td>{assignment.roomNumber}</td>
                            <td>{assignment.student}</td>
                            <td>{assignment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoomAssignments;
