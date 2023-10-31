import React from 'react';

function TransactionList({ transactions }) {
  const cellStyle = {
    padding: '8px', // Adjust the padding as needed
  };

  return (
    <div>
      <h2 style={headerStyle}>Transaction List</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>Date</th>
            <th style={cellStyle}>Description</th>
            <th style={cellStyle}>Amount</th>
            <th style={cellStyle}>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td style={cellStyle}>{transaction.date}</td>
              <td style={cellStyle}>{transaction.description}</td>
              <td style={cellStyle}>{transaction.amount}</td>
              <td style={cellStyle}>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const headerStyle = {
  fontSize: '24px',
  color: '#0074d9',
  marginBottom: '20px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  margin: '20px 0',
};

export default TransactionList;
