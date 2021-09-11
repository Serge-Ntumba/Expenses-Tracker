import React, { useState } from "react";
import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = (props) => {
  const [btnIsToggled, setBtnIsToggled] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setBtnIsToggled(!btnIsToggled);
  };

  const toggleBtn = () => {
    setBtnIsToggled(!btnIsToggled);
  };

  return (
    <div className="new-expense">
      {btnIsToggled ? (
        <ExpenseForm
          onToggleBtn={toggleBtn}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={toggleBtn}>Добавить Новый Расход</button>
      )}
    </div>
  );
};
