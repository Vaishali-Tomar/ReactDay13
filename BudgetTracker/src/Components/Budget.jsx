// src/components/Budget.js
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const Budget = () => {
  const { state, dispatch, remainingBudget } = useContext(BudgetContext);
  const [budget, setBudget] = useState(state.budget);

  const handleSetBudget = () => {
    dispatch({ type: 'SET_BUDGET', payload: budget });
  };

  return (
    <div>
      <h2>Budget: ${state.budget}</h2>
      <h2>Remaining Budget: ${remainingBudget}</h2>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
      />
      <button onClick={handleSetBudget}>Set Budget</button>
    </div>
  );
};

export default Budget;
