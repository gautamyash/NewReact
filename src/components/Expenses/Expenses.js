import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.entries.map((entry, index) => (
        <ExpenseItem
          key={index}
          title={entry.title}
          amount={entry.amount}
          date={entry.date}
          location={entry.location}
        />
      ))}
    </Card>
  );
}

export default Expenses;
