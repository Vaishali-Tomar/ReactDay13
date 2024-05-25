import React from 'react';
import { BudgetProvider } from './context/BudgetContext';
import Budget from './Components/Budget';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import './App.css'; // Ensure this path is correct

const App = () => {
  return (
    <BudgetProvider>
      <div className="App">
        <h1>Budget Planner</h1>
        <Budget />
        <ExpenseForm />
        <ExpenseList />
      </div>
    </BudgetProvider>
  );
};

export default App;
