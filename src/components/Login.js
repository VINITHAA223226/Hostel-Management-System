import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
    const [role, setRole] = useState('');
    const [hostel, setHostel] = useState('boys'); // Default to boys' hostel
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Example credentials for student, warden, and admin with boys and girls' hostel emails
    const credentials = {
        boys: {
            student: {
                email: 'student_boys@example.com',
                password: 'student123'
            },
            warden: {
                email: 'warden_boys@example.com',
                password: 'warden123'
            },
            admin: {
                email: 'admin_boys@example.com',
                password: 'admin123'
            }
        },
        girls: {
            student: {
                email: 'student_girls@example.com',
                password: 'student123'
            },
            warden: {
                email: 'warden_girls@example.com',
                password: 'warden123'
            },
            admin: {
                email: 'admin_girls@example.com',
                password: 'admin123'
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check the role and validate credentials for selected hostel
        if (role && email === credentials[hostel][role]?.email && password === credentials[hostel][role]?.password) {
            // Call onLogin with the role
            onLogin(role);
            // Navigate to the appropriate dashboard based on the role and hostel
            navigate(`/${role}/dashboard`);
        } else {
            // Show error message if credentials are invalid
            setErrorMessage('Invalid email, password, or role');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src="/logo1.png" alt="BIT Logo" className="logo" />
                <h2>BANNARI AMMAN INSTITUTE OF TECHNOLOGY</h2>
                <h2>Hostel Portal</h2>
                <form onSubmit={handleSubmit}>
                    <div className="role-container">
                        <select 
                            onChange={(e) => setRole(e.target.value)} 
                            value={role} 
                            required
                        >
                            <option value="" disabled>Select Role</option>
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                            <option value="warden">Warden</option>
                        </select>
                    </div>

                    <div className="hostel-container">
                        <select 
                            onChange={(e) => setHostel(e.target.value)} 
                            value={hostel} 
                            required
                        >
                            <option value="boys">Boys' Hostel</option>
                            <option value="girls">Girls' Hostel</option>
                        </select>
                    </div>

                    <div className="input-container">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Error message display */}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <div className="button-container">
                        <button type="submit" className="email-login">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
