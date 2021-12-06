import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./Expenseitem.css";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Update!");
    // console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate
        date={props.date}
        title={props.title}
        amount={props.amount}
      />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
