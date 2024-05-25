// src/context/BudgetContext.js
import React, { createContext, useReducer, useEffect } from 'react';

// Create Context
export const BudgetContext = createContext();

// Initial State
const initialState = {
  budget: 3000, // Default initial budget
  expenses: [],
};

// Reducer
const budgetReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BUDGET':
      return {
        ...state,
        budget: action.payload,
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'REMOVE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case 'LOAD_STATE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// Provider Component
export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  // Load state from localStorage
  useEffect(() => {
    const storedState = localStorage.getItem('budgetAppState');
    if (storedState) {
      dispatch({ type: 'LOAD_STATE', payload: JSON.parse(storedState) });
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem('budgetAppState', JSON.stringify(state));
  }, [state]);

  const remainingBudget = state.budget - state.expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <BudgetContext.Provider value={{ state, dispatch, remainingBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};
