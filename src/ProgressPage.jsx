import React, { useState } from 'react';
import SideNav from './SideNav';
import './ProgressPage.css';

const MenuIcon = '☰';
const XP_PER_LEVEL = 100;

const ACHIEVEMENTS = [
  { id: 1, label: 'First Steps', xpNeeded: 20 },
  { id: 2, label: 'Weekly Warrior', xpNeeded: 70 },
  { id: 3, label: 'Halfway Hero', xpNeeded: 150 },
  { id: 4, label: 'Month Master', xpNeeded: 300 },
];

const ProgressPage = ({ goToPage, stats }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(prev => !prev);
    };

    const safeStats =
    stats || {totalXp: 0, level: 1, currentStreak: 0, totalEntries: 0,};

    const { totalXp, level, currentStreak, totalEntries } = safeStats;

    const xpIntoLevel = totalXp % XP_PER_LEVEL;
    const xpPercent = Math.round((xpIntoLevel / XP_PER_LEVEL) * 100);

    const unlockedAchievements = ACHIEVEMENTS.map((a) => ({...a, completed: totalXp >= a.xpNeeded,}));

    const revisitMilestoneEntry = (label) => {
        alert(`✨ Revisiting your beautiful journal entry from Milestone ${label}!`);
    };

    return (
        <div className="mobile-screen progress-screen">
            
            {/* Header with Sparkle Menu */}
            <header className="progress-header">
                <h2>My Magical Progress</h2>
                <button onClick={toggleNav} className="menu-button">
                    {MenuIcon}
                </button>
            </header>

            <main className="progress-main-content">
                
                {/* 1. Progress Overview - Now with Magic! */}
                <div className="progress-overview">
                    <div className="xp-circle">
                        <div className="xp-inner-content">
                            <p>Your Journaling Journey</p>
                            <span className="xp-level">Level {level}</span>
                            <p>{totalXp} total xp</p>
                        </div>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="xp-bar-container">
                        <div 
                            className="xp-bar-fill" 
                            style={{ width: `${xpPercent}%` }}
                        ></div>
                    </div>

                    <p className="xp-bar-label">
                        {xpIntoLevel} of {XP_PER_LEVEL} xp to the next level
                    </p>

                    {/* Key Metrics in Bubbles */}
                    <div className="key-metrics">
                        <p>current streak: <b>{currentStreak} days 🌟</b></p>
                        <p>total entries: <b>{totalEntries} pages 📖</b></p>
                    </div>
                </div>

                {/* 2. Achievement Path - Now Magical! */}
                <div className="milestone-path-container">
                    <h3>✨ Achievement Path ✨</h3>
                    <div className="milestone-path">
                        {unlockedAchievements.map((milestone) => (
                            <div 
                                key={milestone.id} 
                                className={`milestone-node ${milestone.completed ? 'completed' : 'pending'}`}
                                onClick={() => milestone.completed && revisitMilestoneEntry(milestone.label)}
                            >
                                <div className="milestone-icon">
                                    {milestone.completed ? '🌟' : '⭐'}
                                </div>
                                <p className="milestone-label">{milestone.label}</p>
                                <p className="milestone-date"> needs {milestone.xpNeeded} xp</p>
                            </div>
                        ))}
                    </div>
                    
                    <p className="path-guide">Tap the sparkly milestones to relive those special moments! ✨</p>
                </div>
            </main>

            <SideNav 
                isOpen={isNavOpen} 
                toggleNav={toggleNav} 
                goToPage={goToPage} 
            />
        </div>
    );
};

export default ProgressPage;