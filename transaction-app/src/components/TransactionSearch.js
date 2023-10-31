import React, { useState } from 'react';

function TransactionSearch({ filterTransactions }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    filterTransactions(searchTerm);
  };

  // Define your inline CSS styles
  const inputStyles = {
    padding: '10px',
    marginRight: '10px',
  };

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: '#0074d9',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={inputStyles} // Apply the input styles
      />
      <button onClick={handleSearch} style={buttonStyles}>Search</button> {/* Apply the button styles */}
    </div>
  );
}

export default TransactionSearch;
