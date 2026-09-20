import React from 'react';
import { Link } from 'react-router-dom';
import { STORIES } from '../data/stories';

function SprocketHoles({ count = 12 }) {
  return (
    <>
      <div className="sprocket-strip-top" aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => (
          <div key={`top-${i}`} className="sprocket-hole" />
        ))}
      </div>
      <div className="sprocket-strip-bottom" aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => (
          <div key={`bot-${i}`} className="sprocket-hole" />
        ))}
      </div>
    </>
  );
}

export default function FilmstripNav() {
  const row1 = STORIES.slice(0, 3); // Stories 1, 2, 3
  const row2 = STORIES.slice(3, 6); // Stories 4, 5, 6
  const row3 = STORIES.slice(6, 9); // Stories 7, 8, 9

  return (
    <nav className="filmstrip-container" aria-label="Story chapter navigation">
      {/* Row 1 */}
      <div className="filmstrip-row row-1">
        <SprocketHoles count={14} />
        <div className="filmstrip-frames">
          {row1.map((story) => (
            <Link
              to={`/story/${story.id}`}
              key={story.id}
              className="filmstrip-frame"
              title={`Read ${story.pageHeader} - ${story.heading}`}
            >
              <span className="frame-num-title">{story.filmstripTitle}</span>
              <span className="frame-subtitle">{story.filmstripSubtitle}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="filmstrip-connector connector-1-2" aria-hidden="true" />

      {/* Row 2 */}
      <div className="filmstrip-row row-2">
        <SprocketHoles count={14} />
        <div className="filmstrip-frames">
          {row2.map((story) => (
            <Link
              to={`/story/${story.id}`}
              key={story.id}
              className="filmstrip-frame"
              title={`Read ${story.pageHeader} - ${story.heading}`}
            >
              <span className="frame-num-title">{story.filmstripTitle}</span>
              <span className="frame-subtitle">{story.filmstripSubtitle}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="filmstrip-connector connector-2-3" aria-hidden="true" />

      {/* Row 3 */}
      <div className="filmstrip-row row-3">
        <SprocketHoles count={14} />
        <div className="filmstrip-frames">
          {row3.map((story) => (
            <Link
              to={`/story/${story.id}`}
              key={story.id}
              className="filmstrip-frame"
              title={`Read ${story.pageHeader} - ${story.heading}`}
            >
              <span className="frame-num-title">{story.filmstripTitle}</span>
              <span className="frame-subtitle">{story.filmstripSubtitle}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
