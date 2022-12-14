import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props =>{
 const [btnHighlighted, setBtnHighLighted] = useState(false);
 const cartctx = useContext(CartContext);
 const {items} = cartctx;
 const numberOfCartItems = items.reduce((currentNum,item)=>{
  return currentNum + item.amount;
 },0);
 
 const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump: ''}`;

 useEffect(() => {
   if (cartctx.items.length === 0) {
     return
   }
   setBtnHighLighted(true)
   const timer = setTimeout(() => {
     setBtnHighLighted(false);
   }, 300);
   return () => {
    clearTimeout(timer);
   }
 }, [items])

 return (
   <button className={btnClasses} onClick={props.onClick}>
     <span className={classes.icon}>
       <CartIcon></CartIcon>
     </span>
     <span>Your Cart</span>
     <span className={classes.badge}>{numberOfCartItems}</span>
   </button>
 )
}

export default HeaderCartButton;