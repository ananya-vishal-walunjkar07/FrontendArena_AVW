import React from 'react';
import { Link } from 'react-router-dom';

export default function StoryHeader({ story, prevStory, nextStory }) {
  return (
    <header className="story-header-section">
      <nav className="top-nav" aria-label="Chapter navigation">
        <Link to="/" className="sketch-btn" title="Back to Timeline">
          ← Filmstrip Overview
        </Link>
        <div className="nav-buttons">
          {prevStory ? (
            <Link to={`/story/${prevStory.id}`} className="sketch-btn">
              ← Story {prevStory.id}
            </Link>
          ) : (
            <span className="sketch-btn" style={{ opacity: 0.4, cursor: 'not-allowed' }}>
              ← First
            </span>
          )}

          {nextStory ? (
            <Link to={`/story/${nextStory.id}`} className="sketch-btn btn-dark">
              Story {nextStory.id} →
            </Link>
          ) : (
            <Link to="/final" className="sketch-btn btn-dark">
              Final Reflection →
            </Link>
          )}
        </div>
      </nav>

      <div className="story-preheader">
        {story.pageHeader}
      </div>

      <div className="story-heading">
        <span>{story.heading}</span>
        {story.date && <span className="story-date-badge">{story.date}</span>}
      </div>

      {story.highlightBadge && (
        <div className="story-highlight-badge">
          ★ {story.highlightBadge}
        </div>
      )}

      {story.hasSpotifyLogo && (
        <div className="welcome-spotify-banner">
          <svg className="spotify-icon-svg" viewBox="0 0 24 24" fill="#1DB954" aria-label="Spotify Logo">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          <span>{story.welcomeBadge}</span>
        </div>
      )}

      {story.introText && (
        <div className="story-intro-box">
          {story.introText}
        </div>
      )}
    </header>
  );
}
