import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import TransactionSearch from './components/TransactionSearch';


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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch transactions from the server and update the state
  useEffect(() => {
    fetch(' http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
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
        <TransactionForm />
        <TransactionSearch
          filterTransactions={filterTransactions}
          searchTerm={searchTerm}
        />
        <TransactionList transactions={filteredTransactions} />
      </AppContent>
    </AppContainer>
  );
}

export default App;
