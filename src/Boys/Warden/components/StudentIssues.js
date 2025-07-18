// StudentIssues.js
import React from 'react';
import './StudentIssues.css';

const StudentIssues = () => {
    const exampleIssues = [
        { student: 'ZZZ', issue: 'AC not working', status: 'Pending' },
        { student: 'YYY', issue: 'Water leakage', status: 'Resolved' }
    ];

    return (
        <div className="student-issues-container">
            <h2>Student Issues</h2>
            <table className="issues-table">
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Issue</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {exampleIssues.map((issue, index) => (
                        <tr key={index}>
                            <td>{issue.student}</td>
                            <td>{issue.issue}</td>
                            <td>{issue.status}</td>
                            <td>
                                {issue.status === 'Pending' && (
                                    <button className="action-button resolve-button">Resolve</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentIssues;
