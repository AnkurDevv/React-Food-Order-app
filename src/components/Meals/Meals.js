import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const meals = (props) =>{
 return(
  <>
   <MealsSummary/>
   <AvailableMeals/>
  </>
 )
}

export default meals;