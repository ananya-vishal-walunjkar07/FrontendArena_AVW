import React from 'react';

export default function StoryStats({ stats }) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="stats-list">
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-item">
          <span className="stat-label">
            {stat.label}
          </span>
          <span className="stat-value">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
