import React from 'react';
import './RoomDetails.css';

const RoomDetails = () => {
    return (
        <div className="room-details-container">
            <header className="header">
                <h2>Room Details</h2>
            </header>
            <main className="main-content">
                <p>Room Number: 424</p>
                <p>Block: Narmadha</p>
                <p>Floor: 3</p>
                <p>Room type: 5 cot</p>
                <p>Status: Occupied</p>
                
            </main>
        </div>
    );
};

export default RoomDetails;
