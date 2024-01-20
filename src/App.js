import "./App.css";
import Expenses from "./components/Expenses/Expenses";

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

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Expense Tracker App</h2>
      <Expenses entries={entries} />
    </div>
  );
}

export default App;
