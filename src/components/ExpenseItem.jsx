
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div>
      <div className="expense-item">15 August 2023</div>
      <div>
        <h2 className='expense-item__description'>Book</h2>
        <div className='expense-item__price'>$10
        <div className='expense-item__location'>Delhi</div></div>
      </div>
    </div>
  );
}

export default ExpenseItem;
