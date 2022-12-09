import classes from './MealItem.module.css';

const MealItem = (props) => {
  // fixed to makes sure that we always render 2 decimal places
  const price = `$${props.price.toFixed(2)}`
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>

      </div>
    </li>
  )
}

export default MealItem;