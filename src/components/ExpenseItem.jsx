import './ExpenseItem.css'
const month = ["January", "Feburary", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];
function ExpenseItem(props)
{
  const date =String(props.date.getDate()).padStart(2,0);
  const months = month[props.date.getMonth()];
  const year = props.date.getFullYear();

  return (
 <>
      <div className="expense-item">
        <div>
        {months}
        </div>
        <div>{year}</div>
      <div>{date}</div>
    </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
        ${props.price}
      </div>
      </div>
    
    </>

  )
}
export default ExpenseItem;
