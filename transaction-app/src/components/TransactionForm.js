import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TransactionForm = ({ onAddTransaction }) => {
  const initialTransactionState = {
    description: '',
    amount: '',
    date: new Date(),
    category: '',
  };

  const [transaction, setTransaction] = useState(initialTransactionState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({
      ...transaction,
      [name]: value,
    });
  };

  const handleDateChange = (newDate) => {
    setTransaction({ ...transaction, date: newDate });
  };

  const handleAddTransaction = () => {
    onAddTransaction({
      ...transaction,
      date: transaction.date.toISOString(),
    });

    // Reset form fields
    setTransaction(initialTransactionState);
  };

  const labelStyle = {
    display: 'flex',
    margin: '10px 0',
    fontWeight: 'bold',
  };

  const formStyle = {
    padding: '20px',
    borderRadius: '5px',
    marginBottom: '1rem',
    width: '300px',
    margin: '0 auto',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '20px',
    float: 'center',
  };

  return (
    <div style={formStyle}>
      <h2>Add a New Transaction</h2>
      <div>
        <label htmlFor="description" style={labelStyle}>
          Description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={transaction.description}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="amount" style={labelStyle}>
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={transaction.amount}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="category" style={labelStyle}>
          Category:
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={transaction.category}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="date" style={labelStyle}>
          Date:
        </label>
        <DatePicker
          selected={transaction.date}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          style={inputStyle}
        />
      </div>
      <button type="button" onClick={handleAddTransaction} style={buttonStyle}>
        Add Transaction
      </button>
    </div>
  );
};

export default TransactionForm;
