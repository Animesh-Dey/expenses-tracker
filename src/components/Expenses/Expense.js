import React,{useState} from 'react';
import ExpenseItem from "./Expenseitem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

export default function Expense(props) {
   
  const [filteredYear,setFilteredYear]=useState('2021');

  const filterChangeHandler=selectedYear=>{
    //  console.log('expenses.js');
    //  console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}
