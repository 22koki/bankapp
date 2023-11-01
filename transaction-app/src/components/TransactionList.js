import React, { useState, useEffect } from 'react';
import TransactionForm from './TransactionForm';

const cellStyle = {
  padding: '8px',
};

const deleteButtonStyle = {
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
  borderRadius: '5px',
};

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

// Function to add a new transaction
const addTransaction = (transactions, setTransactions, newTransaction) => {
  // Ensure newTransaction has a unique identifier, e.g., an 'id' field
  newTransaction.id = Date.now(); // A simple example to generate a unique ID
  setTransactions([...transactions, newTransaction]);
};

// Function to delete a transaction by ID
const deleteTransaction = (transactions, setTransactions, id) => {
  const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
  setTransactions(updatedTransactions);
};

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch transactions when the component mounts
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 style={headerStyle}>Transaction List</h2>
      <input
        type="text"
        placeholder="Search transactions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>Date</th>
            <th style={cellStyle}>Description</th>
            <th style={cellStyle}>Amount</th>
            <th style={cellStyle}>Category</th>
            <th style={cellStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td style={cellStyle}>{transaction.date}</td>
              <td style={cellStyle}>{transaction.description}</td>
              <td style={cellStyle}>{transaction.amount}</td>
              <td style={cellStyle}>{transaction.category}</td>
              <td style={cellStyle}>
                <button style={deleteButtonStyle} onClick={() => deleteTransaction(transactions, setTransactions, transaction.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TransactionForm onAddTransaction={(newTransaction) => addTransaction(transactions, setTransactions, newTransaction)} />
    </div>
  );
}

export default TransactionList;
