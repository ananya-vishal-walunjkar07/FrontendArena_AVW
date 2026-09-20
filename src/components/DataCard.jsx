import React from 'react';

export default function DataCard({ title, children, className = "", doodle = null }) {
  return (
    <article className={`data-card ${className}`}>
      {title && <h2 className="card-title">{title}</h2>}
      <div className="card-body">
        {children}
      </div>
      {doodle && <div className="card-doodle" aria-hidden="true">{doodle}</div>}
    </article>
  );
}
