import {Fragment} from "react";
import classes from './Header.module.css';
// extension below matters tells that it is not js file and therefore should be transmitted accordingly
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{
 return(
  <Fragment>
   <header className={classes.header}>
    <h1>ReactMeals</h1>
     <HeaderCartButton/>
   </header>
   {/* cant use dot notation since below className has - in its name */}
   <div className={classes['main-image']}>
    <img src={mealsImage} alt="table full of food" />
   </div>
  </Fragment>
 )
}

export default Header;