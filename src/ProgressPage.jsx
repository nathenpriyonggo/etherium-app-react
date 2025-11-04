import React, { useState } from 'react';
import SideNav from './SideNav';
import './ProgressPage.css';

// Placeholder Menu Icon
const MenuIcon = '☰';

// Dummy data for the Progress Page
const dummyProgress = {
    xpLevel: 82, // User's XP / 100
    currentStreak: 7, // Days
    totalEntries: 45,
    challengesCompleted: 3,
    milestoneStatus: [
        { id: 1, completed: true, date: 'Oct 1' },
        { id: 2, completed: true, date: 'Oct 8' },
        { id: 3, completed: false, date: 'Oct 15' },
        { id: 4, completed: false, date: 'Oct 22' },
    ]
};

// Component accepts the goToPage function from App.jsx for navigation
const ProgressPage = ({ goToPage }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(prev => !prev);
    };

    // Placeholder function for the interactive path requirement (Functional / Navigation)
    const revisitMilestoneEntry = (milestoneId) => {
        // In a real application, this would use React Router to navigate to the journal entry details
        alert(`Navigating to journal entry for Milestone ${milestoneId}.`);
    };

    return (
        <div className="mobile-screen progress-screen">
            
            {/* Header with Menu Icon */}
            <header className="progress-header">
                <h2>My Progress</h2>
                <button onClick={toggleNav} className="menu-button">
                    {MenuIcon}
                </button>
            </header>

            <main className="progress-main-content">
                
                {/* 1. Progress Overview (Wireframe: Large Circle) */}
                <div className="progress-overview">
                    <div className="xp-circle">
                        <div className="xp-inner-content">
                            <p>see your journey</p>
                            <span className="xp-level">#{dummyProgress.xpLevel}/100</span>
                        </div>
                    </div>
                    
                    {/* Progress Bar Placeholder */}
                    <div className="xp-bar-container">
                        <div 
                            className="xp-bar-fill" 
                            style={{ width: `${dummyProgress.xpLevel}%` }}
                        ></div>
                    </div>

                    {/* Key Metrics */}
                    <div className="key-metrics">
                        <p>current streak: **{dummyProgress.currentStreak}** days</p>
                        <p>total journal entries: **{dummyProgress.totalEntries}**</p>
                        <p>challenges completed: **{dummyProgress.challengesCompleted}**</p>
                    </div>
                </div>

                {/* 2. Achievement/Milestone Path (Gamification / Motivation) */}
                <div className="milestone-path-container">
                    <h3>Achievement Path</h3>
                    <div className="milestone-path">
                        {dummyProgress.milestoneStatus.map((milestone) => (
                            <div 
                                key={milestone.id} 
                                className={`milestone-node ${milestone.completed ? 'completed' : 'pending'}`}
                                // Only allow clicking if the milestone is completed
                                onClick={() => milestone.completed && revisitMilestoneEntry(milestone.id)}
                            >
                                <div className="milestone-icon">
                                    {milestone.completed ? '✓' : milestone.id}
                                </div>
                                <p className="milestone-label">Milestone {milestone.id}</p>
                                {milestone.completed && <p className="milestone-date">{milestone.date}</p>}
                            </div>
                        ))}
                    </div>
                    
                    <p className="path-guide">Tap completed milestones to revisit those entries!</p>
                </div>
            </main>

            {/* 3. Side Navigation Component - Passes goToPage for navigation */}
            <SideNav 
                isOpen={isNavOpen} 
                toggleNav={toggleNav} 
                goToPage={goToPage} 
            />
        </div>
    );
};

export default ProgressPage;