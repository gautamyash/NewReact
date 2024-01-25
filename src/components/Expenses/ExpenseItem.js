import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const deleteButton = (event) => {
    const clickedButton = event.target;
    const expenseItemElement = clickedButton.closest(".expense-item");

    if (expenseItemElement) {
      expenseItemElement.remove();
    }
  };
  const changeAmount = () => {
    setAmount("100");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={deleteButton}>Delete Expense</button>
        <button onClick={changeAmount}>Change Amount</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
