import React, { useState, useEffect } from 'react';
import './StudentAttendance.css';

const StudentAttendance = () => {
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        
        const sampleAttendanceData = [
            { id: 1, student: 'AAA', rollNumber: 'S001', date: '2024-08-22', status: 'Present' },
            { id: 2, student: 'BBB', rollNumber: 'S002', date: '2024-08-22', status: 'Absent' },
            { id: 3, student: 'CCC', rollNumber: 'S003', date: '2024-08-22', status: 'Present' },
            { id: 4, student: 'DDD', rollNumber: 'S004', date: '2024-08-22', status: 'Present' },
        ];
        setAttendance(sampleAttendanceData);
    }, []);

    return (
        <div className="attendance-container">
            <h2>Student Attendance</h2>
            <table className="attendance-table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Roll Number</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {attendance.map((record) => (
                        <tr key={record.id}>
                            <td>{record.student}</td>
                            <td>{record.rollNumber}</td>
                            <td>{record.date}</td>
                            <td>{record.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentAttendance;
