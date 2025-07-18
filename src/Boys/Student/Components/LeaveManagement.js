import React, { useState } from 'react';
import './LeaveManagement.css';

const LeaveManagement = () => {
    const [leaveType, setLeaveType] = useState('');

    const handleLeaveTypeChange = (event) => {
        setLeaveType(event.target.value);
    };

    return (
        <div className="leave-management-container">
            <header className="header">
                <h2>Leave Management</h2>
            </header>
            <main className="main-content">
                <form>
                    <label htmlFor="leave-type">Leave Type:</label>
                    <select id="leave-type" name="leave-type" value={leaveType} onChange={handleLeaveTypeChange}>
                        <option value="">Select Leave Type</option>
                        <option value="sick">Sick Leave</option>
                        <option value="personal">SP</option>
                        <option value="general">GP</option>
                        <option value="on-duty">OD</option>
                        <option value="internal">Internal OD</option>
                    </select>

                    {leaveType === 'on-duty' && (
                        <>
                            <label htmlFor="activity-id">Activity ID:</label>
                            <input type="text" id="activity-id" name="activity-id" placeholder="Enter Activity ID" />
                        </>
                    )}

                    {leaveType === 'internal ' && (
                        <>
                            <label htmlFor="activity-id">Activity ID:</label>
                            <input type="text" id="activity-id" name="activity-id" placeholder="Enter Activity ID" />
                        </>
                    )}
                    <label htmlFor="start-date">Start Date:</label>
                    <input type="date" id="start-date" name="start-date" />

                    <label htmlFor="end-date">End Date:</label>
                    <input type="date" id="end-date" name="end-date" />

                    <button type="submit">Submit Leave Request</button>
                </form>
            </main>
        </div>
    );
};

export default LeaveManagement;
