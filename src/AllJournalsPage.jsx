import React from 'react';
import SideNav from './SideNav';
import './JournalPage.css';   // reuse your existing styles

const MenuIcon = '☰';

const AllJournalsPage = ({ goToPage, entries, openEntry }) => {
  const handleBack = () => {
    goToPage(2);   // go back to main Journal page
  };

  return (
    <div className="mobile-screen journal-screen">
      {/* header */}
      <header className="journal-header">
        <h2>All Journals</h2>
        <button className="menu-button" onClick={handleBack}>
          ←
        </button>
      </header>

      {/* content */}
      <main className="journal-main-content">
        <h3>Your past entries</h3>

        {(!entries || entries.length === 0) && (
          <p className="journal-placeholder-text">
            ✨ Your past entries will appear here after you save them in the writing screen.
          </p>
        )}

        {entries &&
          entries.map((entry) => (
            <button
              key={entry.id}
              className="journal-entry-card"
              onClick={() => openEntry && openEntry(entry.id)}
            >
              <p className="entry-date">{entry.date}</p>
              <p className="entry-preview">
                {entry.content.slice(0, 80)}
                {entry.content.length > 80 ? '…' : ''}
              </p>
              <p className="entry-meta">{entry.wordCount} words</p>
            </button>
          ))}
      </main>

      {/* optional SideNav if you want it here too */}
      <SideNav
        isOpen={false}
        toggleNav={() => {}}
        goToPage={goToPage}
      />
    </div>
  );
};

export default AllJournalsPage;
