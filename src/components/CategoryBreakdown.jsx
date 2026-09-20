import React from 'react';

export default function CategoryBreakdown({ categories }) {
  if (!categories || categories.length === 0) return null;

  const maxValue = Math.max(...categories.map(c => c.value));

  return (
    <div className="category-breakdown-list">
      {categories.map((cat, idx) => {
        const percent = Math.round((cat.value / maxValue) * 100);
        return (
          <div key={idx} className="category-item">
            <div className="category-row">
              <span className="cat-name">{cat.name}</span>
              <span className="cat-amount" style={{ color: '#ffe066', fontWeight: 'bold' }}>{cat.amount}</span>
            </div>
            <div className="category-bar-bg" aria-hidden="true">
              <div
                className="category-bar-fill"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
