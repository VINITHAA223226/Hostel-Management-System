// ManageStudents.js
import React, { useState } from 'react';
import './ManageStudents.css';

const ManageStudents = () => {
    const initialStudents = [
        { name: 'ABCD', rollNumber: 'S001', hostel: 'Narmadha', roomNumber: '101' },
        { name: 'XYZ', rollNumber: 'S002', hostel: 'Yamuna', roomNumber: '202' },
    ];

    const [students, setStudents] = useState(initialStudents);
    const [newStudent, setNewStudent] = useState({ name: '', rollNumber: '', hostel: '', roomNumber: '' });

    const handleAddStudent = () => {
        if (newStudent.name && newStudent.rollNumber && newStudent.hostel && newStudent.roomNumber) {
            setStudents([...students, newStudent]);
            setNewStudent({ name: '', rollNumber: '', hostel: '', roomNumber: '' });
        }
    };

    const handleRemoveStudent = (rollNumber) => {
        setStudents(students.filter(student => student.rollNumber !== rollNumber));
    };

    return (
        <div className="manage-students-container">
            <h2>Manage Students</h2>
            <div className="add-student">
                <input
                    type="text"
                    placeholder="Name"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Roll Number"
                    value={newStudent.rollNumber}
                    onChange={(e) => setNewStudent({ ...newStudent, rollNumber: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Hostel"
                    value={newStudent.hostel}
                    onChange={(e) => setNewStudent({ ...newStudent, hostel: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Room Number"
                    value={newStudent.roomNumber}
                    onChange={(e) => setNewStudent({ ...newStudent, roomNumber: e.target.value })}
                />
                <button onClick={handleAddStudent} className="action-button">Add Student</button>
            </div>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>Hostel</th>
                        <th>Room Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.rollNumber}</td>
                            <td>{student.hostel}</td>
                            <td>{student.roomNumber}</td>
                            <td>
                                <button
                                    onClick={() => handleRemoveStudent(student.rollNumber)}
                                    className="action-button remove-button"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageStudents;
