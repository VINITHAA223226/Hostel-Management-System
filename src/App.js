import React, { useState, useEffect } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Boys/Admin/Components/AdminDashboard';
import StudentPortal from './Boys/Student/Components/StudentDashboard';
import WardenDashboard from './Boys/Warden/components/WardenDashboard';
import Login from './components/Login';

function App() {
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole'));

    // Check if the userRole exists on page load
    useEffect(() => {
        const role = localStorage.getItem('userRole');
        setUserRole(role);
    }, []);

    const handleLogin = (role) => {
        setUserRole(role); 
        localStorage.setItem('userRole', role); 
    };

    const handleLogout = () => {
        setUserRole(null);
        localStorage.removeItem('userRole');
    };

    // Conditional redirect based on the logged-in user role
    const redirectToDashboard = () => {
        if (userRole === 'admin') return <Navigate to="/admin" />;
        if (userRole === 'student') return <Navigate to="/student" />;
        if (userRole === 'warden') return <Navigate to="/warden" />;
        return <Navigate to="/login" />;
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Login route */}
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    
                    {/* Role-based protected routes */}
                    <Route path="/admin/*" element={userRole === 'admin' ? <AdminDashboard onLogout={handleLogout} /> : redirectToDashboard()} />
                    <Route path="/student/*" element={userRole === 'student' ? <StudentPortal onLogout={handleLogout} /> : redirectToDashboard()} />
                    <Route path="/warden/*" element={userRole === 'warden' ? <WardenDashboard onLogout={handleLogout} /> : redirectToDashboard()} />
                    
                    {/* Redirect if no match found */}
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
