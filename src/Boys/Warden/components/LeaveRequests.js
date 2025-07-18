// LeaveRequests.js
import React from 'react';
import './LeaveRequests.css';

const LeaveRequests = () => {
    const exampleRequests = [
        { student: 'AAA', reason: 'Medical Appointment', date: '2024-08-30' },
        { student: 'BBB', reason: 'Family Event', date: '2024-09-01' }
    ];

    return (
        <div className="leave-requests-container">
            <h2>Leave Requests</h2>
            <table className="requests-table">
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Reason</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {exampleRequests.map((request, index) => (
                        <tr key={index}>
                            <td>{request.student}</td>
                            <td>{request.reason}</td>
                            <td>{request.date}</td>
                            <td>
                                <button className="action-button approve-button">Approve</button>
                                <button className="action-button reject-button">Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaveRequests;
