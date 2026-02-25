
import React from "react";
import Expenses from "../src/components/Expense/Expense";

import NewExpense from "./components/newExpense/NewExpense"
const App = () => {
  const expenses = [
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2023, 9, 17), price: 200 },
  ];
  const addexpenseshandler = (addedexpenses) => {
  console.log(addedexpenses)
  }

  return (
    <div>
      <NewExpense onAddExpense={addexpenseshandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
