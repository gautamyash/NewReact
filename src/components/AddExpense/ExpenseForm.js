import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredtitle, setTitle] = useState(" ");
  const [enteredamount, setAmount] = useState(" ");
  const [entereddate, setDate] = useState(" ");

  const handletextChange = (event) => setTitle(event.target.value);
  const handleamountChange = (event) => setAmount(event.target.value);
  const handledateChange = (event) => setDate(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const expensedata = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };
    console.log(expensedata);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title :</label>
            <input type="text" onChange={handletextChange} />
          </div>
          <div className="new-expense__control">
            <label>Amount :</label>
            <input type="number" onChange={handleamountChange} />
          </div>
          <div className="new-expense__control">
            <label>Date :</label>
            <input type="date" onChange={handledateChange} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
