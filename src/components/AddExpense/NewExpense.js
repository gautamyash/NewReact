import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onFormSubmit = (expensedata) => {
    const expenseData = {
      ...expensedata,
      id: Math.random().toString(),
    };
    props.onSavedListItem(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmitChange={onFormSubmit} />
    </div>
  );
};

export default NewExpense;
