import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div>
      {props.entries.map((entry, index) => (
        <ExpenseItem
          key={index}
          title={entry.title}
          amount={entry.amount}
          date={entry.date}
          location={entry.location}
        />
      ))}
    </div>
  );
}

export default Expenses;
