import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteButton = (event) => {
    const clickedButton = event.target;
    const expenseItemElement = clickedButton.closest(".expense-item");

    if (expenseItemElement) {
      expenseItemElement.remove();
    }
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={deleteButton}>Delete Expense</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
