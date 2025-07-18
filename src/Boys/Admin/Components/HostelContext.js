import React, { createContext, useState, useEffect } from 'react';

export const HostelContext = createContext();

const HostelProvider = ({ children }) => {
    const initialStudents = JSON.parse(localStorage.getItem('students')) || [
        { name: 'ABCD', rollNumber: 'CS101', hostel: 'Pearl', roomNumber: '101' },
        { name: 'XYZ', rollNumber: 'CT102', hostel: 'Ruby', roomNumber: '202' },
    ];

    const [students, setStudents] = useState(initialStudents);

    // Save students to localStorage
    useEffect(() => {
        localStorage.setItem('students', JSON.stringify(students));
    }, [students]);

    const hostels = [
        { name: 'Pearl', teachers: 10 },
        { name: 'Ruby', teachers: 8 },
        { name: 'Diamond', teachers: 12 },
        { name: 'Emerald', teachers: 7 },
        { name: 'Sapphire', teachers: 9 },
    ];

    const getStudentCountByHostel = (hostelName) =>
        students.filter((student) => student.hostel === hostelName).length;

    return (
        <HostelContext.Provider value={{ students, setStudents, hostels, getStudentCountByHostel }}>
            {children}
        </HostelContext.Provider>
    );
};

export default HostelProvider;
