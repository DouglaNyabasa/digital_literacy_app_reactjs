import React from "react";
import { auth } from "../firebase/Firebase"; // Import Firebase authentication
import "./dashboard.css"; // Import your CSS file

const UserDashboard = () => {
  const user = auth.currentUser; // Get the current user

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Optionally navigate back to the login page after logout
      // navigate("/login"); // Uncomment if using react-router for navigation
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      {user ? (
        <div className="user-info">
          <p><strong>Name:</strong> {user.displayName || "User"}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      ) : (
        <p>Please log in to see your dashboard.</p>
      )}
      <div className="dashboard-content">
        <h2>Your Features</h2>
        <ul>
          <li><a href="/profile">Edit Profile</a></li>
          <li><a href="/courses">Your Courses</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </div>
    </div>
    
    
  );
};

export default UserDashboard;