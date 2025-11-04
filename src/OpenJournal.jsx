import React, { useState, useEffect } from 'react';
import './OpenJournal.css'; 

// Placeholder Icons
const HomeIcon = '🏠';
const UploadIcon = '🖼️';
const SaveIcon = '💾';
const ThemeIcon = '🎨';

// Updated props: initialContent, onSave (final save), onContentChange (autosave)
const OpenJournal = ({ goToPage, initialContent, onSave, onContentChange }) => {
    // Local state for auto-save status visual feedback only
    const [isSaving, setIsSaving] = useState(false);

    // Placeholder for autosave logic (Functional / Stability Requirement)
    useEffect(() => {
        const autoSaveTimer = setTimeout(() => {
            if (initialContent.length > 0) {
                // Simulate saving process
                setIsSaving(true);
                console.log(`Auto-saving entry: "${initialContent.substring(0, 30)}..."`);
                
                // Note: The actual content update is already happening in App.jsx via onContentChange,
                // this is just the visual feedback simulation.
                
                setTimeout(() => {
                    setIsSaving(false);
                }, 1000); 
            }
        }, 3000); 

        return () => clearTimeout(autoSaveTimer);
    }, [initialContent]); // Dependency array: runs whenever the entry content (prop) changes

    const handleTextareaChange = (e) => {
        // AUTOSAVE: Immediately push the change up to App.jsx state
        onContentChange(e.target.value); 
    };

    const handleFinalSave = () => {
        // FINAL SAVE: Execute the onSave prop function to trigger App.jsx logic
        onSave(initialContent);
        alert('Journal Entry Saved! Navigating back to Journal Page.');
    };

    return (
        <div className="mobile-screen journal-writing-screen">
            
            {/* 1. Top Toolbar */}
            <header className="writing-toolbar">
                <button 
                    onClick={() => goToPage(2)} // Navigate back to the main Journal menu
                    className="toolbar-button home-button"
                >
                    {HomeIcon} Home
                </button>

                <div className="customization-tools">
                    <button className="toolbar-button upload-button">
                        {UploadIcon} Upload
                    </button>
                    <button className="toolbar-button theme-button">
                        {ThemeIcon} Theme
                    </button>
                </div>

                <button 
                    onClick={handleFinalSave} // Use the final save handler
                    className={`toolbar-button save-button ${isSaving ? 'saving' : ''}`}
                    disabled={isSaving}
                >
                    {isSaving ? 'Saving...' : `${SaveIcon} Save`}
                </button>
            </header>

            {/* 2. Writing Canvas */}
            <main className="writing-canvas">
                <textarea
                    placeholder="Start writing here..."
                    value={initialContent} // READ from the centralized state prop
                    onChange={handleTextareaChange} // WRITE via the centralized handler
                    className="journal-textarea"
                />
            </main>

            {/* Visual feedback for auto-save status */}
            {isSaving && <div className="autosave-feedback">Autosaving...</div>}

        </div>
    );
};

export default OpenJournal;