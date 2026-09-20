import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { STORIES } from '../data/stories';
import CloudsBackground from '../components/CloudsBackground';
import Footer from '../components/Footer';
import StoryHeader from '../components/StoryHeader';
import DataCard from '../components/DataCard';
import ArtistTable from '../components/ArtistTable';
import ExpenseTable from '../components/ExpenseTable';
import CategoryBreakdown from '../components/CategoryBreakdown';
import CityTable from '../components/CityTable';
import StoryStats from '../components/StoryStats';

export default function StoryPage() {
  const { id } = useParams();
  const storyId = parseInt(id, 10);
  const story = STORIES.find(s => s.id === storyId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!story) {
    return <Navigate to="/" replace />;
  }

  const prevStory = STORIES.find(s => s.id === storyId - 1);
  const nextStory = STORIES.find(s => s.id === storyId + 1);

  // Determine cards based on story layout in sketches
  const renderCards = () => {
    if (story.id === 1) {
      // Story 1: Top 5 Artists, Your Top Tracks, Spotify Stats
      return (
        <div className="story-cards-grid">
          <DataCard title="TOP 5 ARTISTS" className="stagger-step-1" doodle="♫">
            <ArtistTable artists={story.topArtists} />
          </DataCard>

          <DataCard title="YOUR TOP TRACKS" className="stagger-step-2">
            <table className="sketch-table" aria-label="Top Tracks">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '45px' }}>Rank</th>
                  <th scope="col">Track</th>
                  <th scope="col" className="align-right">Plays</th>
                </tr>
              </thead>
              <tbody>
                {story.topTracks.map(track => (
                  <tr key={track.rank}>
                    <td><span className="rank-badge">{track.rank}</span></td>
                    <td>{track.name}</td>
                    <td className="align-right" style={{ color: '#ffe066', fontWeight: 'bold' }}>{track.plays}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataCard>

          <DataCard title="Story data" className="stagger-step-3">
            <StoryStats stats={story.stats} />
          </DataCard>
        </div>
      );
    }

    if (story.id === 2) {
      // Story 2: Top 5 Artists, Top 5 expenses, Story Data
      return (
        <div className="story-cards-grid">
          <DataCard title="TOP 5 ARTISTS" className="stagger-step-1">
            <ArtistTable artists={story.topArtists} />
          </DataCard>

          <DataCard title="Top 5 expenses" className="stagger-step-2">
            <ExpenseTable expenses={story.topExpenses} title="Where" />
          </DataCard>

          <DataCard title="Story data" className="stagger-step-3">
            <StoryStats stats={story.stats} />
          </DataCard>
        </div>
      );
    }

    if (story.id === 3 || story.id === 4) {
      // Stories 3 & 4: Top 5 artists, Top 5 expenses, Story data + Categories
      return (
        <div className="story-cards-grid staggered-cascade">
          <DataCard title="Top 5 artists" className="stagger-step-1">
            <ArtistTable artists={story.topArtists} />
          </DataCard>

          <DataCard title="Top 5 expenses" className="stagger-step-2">
            <ExpenseTable expenses={story.topExpenses} title="What" />
          </DataCard>

          <div className="stagger-step-3" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <DataCard title="Story data">
              <StoryStats stats={story.stats} />
            </DataCard>

            {story.categories && (
              <DataCard title={story.categoryHeader || "Categories"}>
                <CategoryBreakdown categories={story.categories} />
              </DataCard>
            )}
          </div>
        </div>
      );
    }

    if (story.id === 5) {
      // Story 5: Top 5 artists, India categories by amount, Top 5 cities represented in transaction records
      return (
        <div className="story-cards-grid staggered-cascade">
          <DataCard title="Top 5 artists" className="stagger-step-1">
            <ArtistTable artists={story.topArtists} />
          </DataCard>

          <DataCard title={story.categoryHeader || "India categories by amount"} className="stagger-step-2">
            <CategoryBreakdown categories={story.categories} />
          </DataCard>

          <div className="stagger-step-3" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <DataCard title={story.citiesLabel}>
              <CityTable
                cities={story.cities}
                label={story.citiesLabel}
                note={story.citiesNote}
              />
            </DataCard>

            <DataCard title="Story data">
              <StoryStats stats={story.stats} />
            </DataCard>
          </div>
        </div>
      );
    }

    // Stories 6, 7, 8, 9
    return (
      <div className="story-cards-grid staggered-cascade">
        <DataCard title="Top 5 artists" className="stagger-step-1">
          <ArtistTable artists={story.topArtists} />
        </DataCard>

        <div className="stagger-step-2" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {story.cities && (
            <DataCard title={story.citiesLabel}>
              <CityTable cities={story.cities} label={story.citiesLabel} />
            </DataCard>
          )}

          {story.categories && (
            <DataCard title={story.categoryHeader || "Spending categories"}>
              <CategoryBreakdown categories={story.categories} />
            </DataCard>
          )}
        </div>

        <div className="stagger-step-3">
          <DataCard title="Story data">
            <StoryStats stats={story.stats} />
            {story.importantNote && (
              <div className="card-note-box" style={{ marginTop: '16px' }}>
                <strong>Note:</strong> {story.importantNote}
              </div>
            )}
          </DataCard>
        </div>
      </div>
    );
  };

  return (
    <div className={`page-container theme-${story.theme}`}>
      <CloudsBackground />
      <main className="page-content" id="main-content">
        <StoryHeader
          story={story}
          prevStory={prevStory}
          nextStory={nextStory}
        />

        {renderCards()}

        {story.introText && story.id > 2 && (
          <section className="story-narrative-card" aria-label="Story Narrative">
            <p>{story.introText}</p>
          </section>
        )}

        <nav className="chapter-bottom-nav" aria-label="Bottom chapter navigation">
          {prevStory ? (
            <Link to={`/story/${prevStory.id}`} className="sketch-btn">
              ← Previous ({prevStory.pageHeader})
            </Link>
          ) : (
            <Link to="/" className="sketch-btn">
              ← Overview
            </Link>
          )}

          <Link to="/" className="sketch-btn" title="Back to filmstrip">
            Filmstrip Menu
          </Link>

          {nextStory ? (
            <Link to={`/story/${nextStory.id}`} className="sketch-btn btn-dark">
              Next ({nextStory.pageHeader}) →
            </Link>
          ) : (
            <Link to="/final" className="sketch-btn btn-dark">
              Final Reflection Page →
            </Link>
          )}
        </nav>
      </main>
      <Footer />
    </div>
  );
}
