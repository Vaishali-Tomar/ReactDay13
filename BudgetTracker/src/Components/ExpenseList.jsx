// src/components/ExpenseList.js
import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const { state } = useContext(BudgetContext);

  return (
    <div>
      <h3>Expenses</h3>
      {state.expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
