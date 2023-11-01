import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      description,
      amount: parseFloat(amount),
      date: date.toISOString(),
    };

    onAddTransaction(newTransaction);

    setDescription('');
    setAmount('');
    setCategory('');
    setDate(new Date());
  };

  const formStyle = {
    padding: '20px',
    borderRadius: '5px',
    marginBottom: '1rem',
    width: '300px',
    margin: '0 auto',
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description" style={labelStyle}>
            Description:
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="date" style={labelStyle}>
            Date:
          </label>
          <DatePicker
            selected={date}
            onChange={(newDate) => setDate(newDate)}
            dateFormat="yyyy-MM-dd"
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
