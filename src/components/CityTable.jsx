import React from 'react';

export default function CityTable({ cities, label, note }) {
  if (!cities || cities.length === 0) return null;

  return (
    <div>
      <table className="sketch-table" aria-label={label}>
        <thead>
          <tr>
            <th scope="col" style={{ width: '45px' }}>Rank</th>
            <th scope="col">City</th>
            <th scope="col" className="align-right">Transactions</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((item) => (
            <tr key={item.rank}>
              <td>
                <span className="rank-badge">{item.rank}</span>
              </td>
              <td>{item.city}</td>
              <td className="align-right" style={{ color: '#ffe066', fontWeight: 'bold' }}>
                {item.transactions}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {note && (
        <div className="card-note-box">
          {note}
        </div>
      )}
    </div>
  );
}
