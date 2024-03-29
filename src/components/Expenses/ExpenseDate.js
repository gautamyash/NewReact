import "./ExpenseDate.css";

function ExpenseDate(props) {
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item__date">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}
export default ExpenseDate;
