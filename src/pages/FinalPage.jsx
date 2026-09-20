import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_METADATA } from '../data/stories';
import CloudsBackground from '../components/CloudsBackground';
import Footer from '../components/Footer';

export default function FinalPage() {
  return (
    <div className="page-container theme-blue final-page-container">
      <CloudsBackground />
      <main className="page-content final-card-wrapper" id="main-content">
        <div className="final-quote-box">
          <p className="final-quote-text">
            "{SITE_METADATA.finalReflection}"
          </p>
        </div>

        <div className="final-actions">
          <Link to="/" className="sketch-btn btn-dark">
            ← Back to Overview
          </Link>
          <Link to="/story/1" className="sketch-btn">
            Restart Journey (Story 1) →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
