import React from 'react';

export default function ArtistTable({ artists }) {
  if (!artists || artists.length === 0) return null;

  return (
    <table className="sketch-table" aria-label="Top 5 Artists">
      <thead>
        <tr>
          <th scope="col" style={{ width: '45px' }}>Rank</th>
          <th scope="col">Artist</th>
          <th scope="col" className="align-right">Records</th>
        </tr>
      </thead>
      <tbody>
        {artists.map((item) => (
          <tr key={item.rank}>
            <td>
              <span className="rank-badge">{item.rank}</span>
            </td>
            <td><strong>{item.name}</strong></td>
            <td className="align-right">{item.records}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
