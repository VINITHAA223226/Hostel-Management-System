import React from 'react';
import './Feedback.css';

const ComplaintsFeedback = () => {
    return (
        <div className="complaints-feedback-container">
            <header className="header">
                <h2>Complaints / Feedback</h2>
            </header>
            <main className="main-content">
                <form>
                    <label htmlFor="feedback">Your Feedback / Complaint:</label>
                    <textarea id="feedback" name="feedback" rows="4"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </div>
    );
};

export default ComplaintsFeedback;
