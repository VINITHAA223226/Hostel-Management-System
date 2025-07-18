// MailManagement.js
import React, { useState } from 'react';
import './MailManagement.css';

const MailManagement = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMail = () => {
        if (email && message) {
            alert('Mail sent successfully!');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <div className="mail-management-container">
            <h2>Mail Management</h2>
            <div className="send-mail">
                <input
                    type="email"
                    placeholder="Recipient Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSendMail} className="action-button">Send Mail</button>
            </div>
        </div>
    );
};

export default MailManagement;
