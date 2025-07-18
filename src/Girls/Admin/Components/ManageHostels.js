//ManageHostels.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageHostels.css';

const ManageHostels = () => {
    const navigate = useNavigate();

    const handleHostelClick = (hostelName) => {
        navigate(`/admin/manage-rooms/${hostelName}`);
    };

    const hostels = [
        'Narmadha',
        'Ganga',
        'Yamuna',
        'Bhanvani',
        'Cauvery'
    ];

    return (
        <div className="manage-hostels-container">
            <header className="header">
                <h2>Manage Hostel Blocks</h2>
            </header>
            <main className="main-content">
                <div className="hostel-buttons">
                    {hostels.map((hostel) => (
                        <button
                            key={hostel}
                            className="hostel-button"
                            onClick={() => handleHostelClick(hostel)}
                        >
                            {hostel}
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ManageHostels;
