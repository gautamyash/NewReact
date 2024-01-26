import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onFormSubmit = (expensedata) => {
    const expenseData = {
      ...expensedata,
      id: Math.random().toString(),
    };
    props.onSavedListItem(expenseData);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense </button>
      )}
      {isEditing && <ExpenseForm onFormSubmitChange={onFormSubmit} />}
    </div>
  );
};

export default NewExpense;
