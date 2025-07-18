// RoomComplaints.js
import React, { useState } from 'react';
import './RoomComplaints.css';

const RoomComplaints = () => {
    const [complaints, setComplaints] = useState([
        { id: 1, student: 'AAA', complaint: 'AC not working', status: 'Pending' },
    ]);
    const [newComplaint, setNewComplaint] = useState({ student: '', complaint: '' });

    const handleAddComplaint = () => {
        if (newComplaint.student && newComplaint.complaint) {
            setComplaints([...complaints, { id: complaints.length + 1, ...newComplaint, status: 'Pending' }]);
            setNewComplaint({ student: '', complaint: '' });
        }
    };

    const handleResolveComplaint = (id) => {
        setComplaints(complaints.map(c => c.id === id ? { ...c, status: 'Resolved' } : c));
    };

    return (
        <div className="room-complaints-container">
            <h2>Room Complaints</h2>
            <div className="add-complaint">
                <input
                    type="text"
                    placeholder="Student Name"
                    value={newComplaint.student}
                    onChange={(e) => setNewComplaint({ ...newComplaint, student: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Complaint"
                    value={newComplaint.complaint}
                    onChange={(e) => setNewComplaint({ ...newComplaint, complaint: e.target.value })}
                />
                <button onClick={handleAddComplaint} className="action-button">Add Complaint</button>
            </div>
            <table className="complaints-table">
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Complaint</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {complaints.map((complaint, index) => (
                        <tr key={index}>
                            <td>{complaint.student}</td>
                            <td>{complaint.complaint}</td>
                            <td>{complaint.status}</td>
                            <td>
                                {complaint.status === 'Pending' && (
                                    <button
                                        onClick={() => handleResolveComplaint(complaint.id)}
                                        className="action-button resolve-button"
                                    >
                                        Resolve
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoomComplaints;
