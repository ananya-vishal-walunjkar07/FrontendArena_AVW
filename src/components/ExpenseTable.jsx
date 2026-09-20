import React from 'react';

export default function ExpenseTable({ expenses, title = "What" }) {
  if (!expenses || expenses.length === 0) return null;

  return (
    <table className="sketch-table" aria-label="Top 5 Expenses">
      <thead>
        <tr>
          <th scope="col" style={{ width: '45px' }}>Rank</th>
          <th scope="col">{title}</th>
          <th scope="col" className="align-right">Amount</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((item) => (
          <tr key={item.rank}>
            <td>
              <span className="rank-badge">{item.rank}</span>
            </td>
            <td>{item.what}</td>
            <td className="align-right" style={{ color: '#ffe066', fontWeight: 'bold' }}>
              {item.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
