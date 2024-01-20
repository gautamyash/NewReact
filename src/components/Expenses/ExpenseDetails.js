import "./ExpenseItem.css";

function ExpenseDetails(props) {
  return (
    <div>
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__price">{props.amount}</div>
      <div className="expense-item__location">{props.location}</div>
    </div>
  );
}

export default ExpenseDetails;
