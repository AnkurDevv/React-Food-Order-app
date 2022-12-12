import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props =>{
 const cartctx = useContext(CartContext);
 const numberOfCartItems = cartctx.items.reduce((currentNum,item)=>{
  return currentNum + item.amount;
 },0);

 return (
   <button className={classes.button} onClick={props.onClick}>
     <span className={classes.icon}>
       <CartIcon></CartIcon>
     </span>
     <span>Your Cart</span>
     <span className={classes.badge}>{numberOfCartItems}</span>
   </button>
 )
}

export default HeaderCartButton;