import React, { useState } from "react";

import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/AddExpense/NewExpense";
function App() {
  const entries = [
    {
      title: "Food",
      amount: 100,
      date: new Date("2024-01-16"),
      location: "Pune",
    },
    {
      title: "Apparels",
      amount: 60,
      date: new Date("2024-05-16"),
      location: "Mumbai",
    },
    {
      title: "Electronics",
      amount: 500,
      date: new Date("2024-03-16"),
      location: "Delhi",
    },
    {
      title: "Gym",
      amount: 50,
      date: new Date("2024-07-16"),
      location: "Bangalore",
    },
  ];
  const [expenses, setExpenses] = useState(entries);

  const onListItem = (expense) => {
    // Update the expenses list with the new expense
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Expense Tracker App</h2>
      <NewExpense onSavedListItem={onListItem} />
      <Expenses entries={expenses} />
    </div>
  );
}

export default App;
