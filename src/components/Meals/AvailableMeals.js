import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import { useEffect, useState } from 'react'

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      //meals.json -> firebase specific tells the code which node we are reffering to
      const response = await fetch(
        'https://react-http-f62d0-default-rtdb.firebaseio.com/meals.json'
      )

      console.log(response)

      if (!response.ok) {
        // checking if response.ok is falsy as its value will be null if response isn't returned
        throw new Error('Something went wrong!')
      }

      const responseData = await response.json() // this rtns an object and we want an array

      const loadedMeals = []

      console.log(responseData)

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }

      setMeals(loadedMeals)
      setIsLoading(false)
    }

    fetchMeals().catch(error =>{
     setIsLoading(false);
     setHttpError(error.message); 
    });

  }, [])

  if(isLoading){
    return <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if(httpError){
   return (
     <section className={classes.MealsError}>
       <p>{httpError}</p>
     </section>
   )
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        name={meal.name}
        description={meal.description}
        price={meal.price}
        key={meal.id}
        id={meal.id}
      />
    )
  })

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
