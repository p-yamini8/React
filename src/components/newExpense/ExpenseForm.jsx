import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  
  // const [inputvalues,setUpdates]=useState({
  //   enteredTitle:"",
  //   enteredAmount:"",
  //   enteredDate:"",
  // })
  // const titleChangeHandler = (event) => {
  //  setUpdates((prevState)=>{
  //   return{
  //       ...prevState,enteredTitle:event.target.value,
  //   }
  //  })
  // };
  // const amountChangeHandler = (event) => {
  // setUpdates((prevState)=>{
  //   return{
  //       ...prevState,enteredAmount:event.target.value,
  //   }
  // })
  // }
  // const dateChangeHandler = (event) => {
  //  setUpdates((prevState)=>{
  //   return{
  //       ...prevState,enteredDate:event.target.value
  //   }
  //  })
  // }
const [enteredTitle, setTitle] = useState("");
  const [enteredDate, setDate] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const changeTitleHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value)
  }
  const changeAmountHandler = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  }
  const changeDateHandler = (e) => {
    e.preventDefault()
    {
      setDate(e.target.value);
    }
  }
   const formSubmitHandler = (event) => {
    event.preventDefault();
    const Expenses = {
      title: enteredTitle,
      amount: enteredAmount,
      date:new Date(enteredDate)
    }
    console.log(Expenses);
    setTitle("");
    setAmount("");
    setDate("");

 }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={enteredTitle} onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount"value={enteredAmount} onChange={changeAmountHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" min="2023-01-01" max="2024-12-31" value={enteredDate} onChange={changeDateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
