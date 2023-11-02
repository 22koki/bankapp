import React, { useState } from 'react';

function TransactionSearch({ filterTransactions }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    filterTransactions(searchTerm);
  };

  const inputStyles = {
    padding: '15px',
    marginRight: '15px',
    borderRadius: '25px'
  };

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={inputStyles}
      />
      <button onClick={handleSearch} style={buttonStyles}>
        Search
      </button>
    </div>
  );
}

export default TransactionSearch;
