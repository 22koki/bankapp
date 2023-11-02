

import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; // Add this import statement
//import TransactionForm from './components/TransactionForm';
import TransactionSearch from './components/TransactionSearch';
import TransactionList from './components/TransactionList';

// Rest of your code remains the same
// ...


const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
`;

const AppHeader = styled.h1`
  color: #0074d;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const AppContent = styled.div`
  display: grid;
  flex-direction: column-reverse;
  align-items: center;
`;

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Move searchTerm state to the App component

  // Define the onAddTransaction function to handle adding new transactions
  //const onAddTransaction = (newTransaction) => {
    // Implement the logic to add the new transaction here
    // You can use setTransactions to update the transactions state.
 // };

  // Fetch transactions from the server and update the state
  // Fetch transactions from the server and update the state
useEffect(() => {
  fetch('http://localhost:3000/transactions')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok'); // Add the missing semicolon
      }
      return response.json();
    })
    .then((data) => {
      console.log('Fetched data:', data);
      setTransactions(data);
      setFilteredTransactions(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);


  // Function to filter transactions based on search term
  const filterTransactions = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm === '') {
      setFilteredTransactions(transactions);
    } else {
      const filtered = transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTransactions(filtered);
    }
  };
  

  return (
    <AppContainer>
      <AppHeader>The Bank of Flatiron</AppHeader>

      <AppContent>
    
        <TransactionSearch
          filterTransactions={filterTransactions}
          searchTerm={searchTerm} // Pass searchTerm as a prop
        />
        
        <TransactionList transactions={filteredTransactions} />
      </AppContent>
    </AppContainer>
  );
}

export default App;