// src/components/ExpenseItem.js
import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const ExpenseItem = ({ expense }) => {
  const { dispatch } = useContext(BudgetContext);

  const handleRemoveExpense = () => {
    dispatch({ type: 'REMOVE_EXPENSE', payload: expense.id });
  };

  return (
    <div>
      <span>{expense.name}: ${expense.amount}</span>
      <button onClick={handleRemoveExpense}>Remove</button>
    </div>
  );
};

export default ExpenseItem;
