import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const handletextChange = (event) => console.log(event.target.value);
  const handleamountChange = (event) => console.log(event.target.value);
  const handledateChange = (event) => console.log(event.target.value);
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
