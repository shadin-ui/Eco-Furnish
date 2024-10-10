import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data and loggedIn state
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('isLoggedIn'); // Clear the isLoggedIn state as well
    setIsLoggedIn(false); // Update the logged-in status

    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <ul>
        <li><a href="/admin/orders">Order Management</a></li>
        <li><a href="/admin/users">User Management</a></li>
        <li><a href="/admin/products">Product Management</a></li>
        <li><a href="/admin/settings">Settings</a></li>
      </ul>
      {/* Logout Button */}
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;

