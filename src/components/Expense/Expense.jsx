import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../../UI/Card";

const  Expenses=(props)=> {
  const [FilteredYear,setFilteredYear]=useState('2023')
   const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
   }
    const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  });
  return (
    <Card className="expenses">
    <ExpensesFilter selected={FilteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
