// src/components/ExpenseForm.js
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const ExpenseForm = () => {
  const { dispatch } = useContext(BudgetContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    const newExpense = {
      id: Date.now(),
      name,
      amount: Number(amount),
    };

    dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
    setName('');
    setAmount('');
  };

  return (
    <div>
      <h3>Add Expense</h3>
      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default ExpenseForm;
