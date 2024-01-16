import "./ExpenseItem.css";

function ExpenseItem(props) { 
    return (
      <div>
        <div className="expense-item">Date: {props.date.toLocaleDateString()}</div>
        <div className="expense-item__description">Item: {props.title}</div>
        <div className="expense-item__location">Location: {props.location}</div>
        <div className="expense-item__price">Amount: {props.amount}</div>
        </div>
    );
  }
  
 export default ExpenseItem;

