import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  useEffect(() => {
    setNewBudget(budget);
  }, [budget]);

  const handleBudgetChange = (event) => {
    const value = parseInt(event.target.value);
    setNewBudget(value);
  };

  const handleBudgetBlur = () => {
    if (newBudget > 20000) {
      alert("Budget cannot exceed 20,000.");
      setNewBudget(budget);
    } else if (newBudget < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending value.");
      setNewBudget(budget);
    } else {
      dispatch({
        type: 'SET_BUDGET',
        payload: newBudget,
      });
    }
  };

  return (
    <div className="alert alert-secondary d-flex align-items-center">
      <span>Budget:</span>
      <span>{currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
        onBlur={handleBudgetBlur}
        className="form-control mx-2"
        style={{ width: '100px' }}
      />
    </div>
  );
};

export default Budget;
