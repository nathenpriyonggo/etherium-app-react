import React, { useState } from 'react';
import SideNav from './SideNav';
import './ProfilePage.css'; 

// Placeholder Icon for the menu
const MenuIcon = '☰';

// Component accepts the central navigation function (goToPage)
const ProfilePage = ({ goToPage }) => {
    // State to manage the open/close status of the Side Navigation
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(prev => !prev);
    };

    return (
        // The mobile-screen class ensures it's contained within the 375x812 frame
        <div className="mobile-screen profile-screen">
            
            {/* 1. Header with Menu Icon */}
            <header className="profile-header">
                <h2>Profile</h2> {/* Page Title */}
                <button onClick={toggleNav} className="menu-button">
                    {MenuIcon}
                </button>
            </header>

            {/* 2. Main Content Area */}
            <main className="profile-main-content">
                
                {/* Profile Picture Placeholder (Wireframe: Large circle) */}
                <div className="profile-pic-container">
                    <div className="profile-pic-circle"></div>
                    <h3>User's Name</h3>
                </div>
                
                {/* Stats/Summary Section (Wireframe: First rectangle) */}
                <div className="profile-section summary-section">
                    <h4>Journaling Summary</h4>
                    <p>Total Entries: 45</p>
                    <p>Current Streak: 7 Days</p>
                    <p>XP Level: 82</p>
                </div>
                
                {/* Preferences/Options (Wireframe: Second rectangle) */}
                <div className="profile-section options-section">
                    <div className="option-item">
                        <span>Edit Profile</span>
                        <span>&gt;</span>
                    </div>
                    <div className="option-item">
                        <span>Data & Privacy</span>
                        <span>&gt;</span>
                    </div>
                    <div className="option-item">
                        <span>Notification Settings</span>
                        <span>&gt;</span>
                    </div>
                </div>

            </main>

            {/* 3. Side Navigation Component */}
            <SideNav 
                isOpen={isNavOpen} 
                toggleNav={toggleNav} 
                goToPage={goToPage} 
            />
        </div>
    );
};

export default ProfilePage;