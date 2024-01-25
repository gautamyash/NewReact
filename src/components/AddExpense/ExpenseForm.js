import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [enteredamount, setEnteredAmount] = useState("");
  const [entereddate, setEnteredDate] = useState("");

  const handletextChange = (event) => setEnteredTitle(event.target.value);
  const handleamountChange = (event) => setEnteredAmount(event.target.value);
  const handledateChange = (event) => setEnteredDate(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const expensedata = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };
    props.onFormSubmitChange(expensedata);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title :</label>
            <input
              type="text"
              value={enteredtitle}
              onChange={handletextChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount :</label>
            <input
              type="number"
              value={enteredamount}
              onChange={handleamountChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Date :</label>
            <input
              type="date"
              value={entereddate}
              onChange={handledateChange}
            />
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
