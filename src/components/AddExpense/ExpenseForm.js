import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [title, setTitle] = useState(" ");
  const [amount, setAmount] = useState(" ");
  const [date, setDate] = useState(" ");

  const handletextChange = (event) => setTitle(event.target.value);
  const handleamountChange = (event) => setAmount(event.target.value);
  const handledateChange = (event) => setDate(event.target.value);
  return (
    <div>
      <form>
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
