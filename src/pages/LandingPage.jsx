import React from 'react';
import { SITE_METADATA } from '../data/stories';
import CloudsBackground from '../components/CloudsBackground';
import FilmstripNav from '../components/FilmstripNav';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="page-container theme-blue">
      <CloudsBackground />
      <main className="page-content" id="main-content">
        <header className="landing-header">
          <div className="landing-label" aria-hidden="true">Landing pg</div>
          <h1 className="landing-title">{SITE_METADATA.title}</h1>
          <div className="intro-bubble">
            <p>{SITE_METADATA.subtitle}</p>
          </div>
        </header>

        <section aria-label="Aarav's Life Journey Timeline">
          <FilmstripNav />
        </section>
      </main>
      <Footer />
    </div>
  );
}
