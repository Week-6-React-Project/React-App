import React from "react";
import MealDetails from './MealDetails';

function MealInfo({ day }) {
  console.log(day);
  const { meals, nutrients } = day;

  const ShowMeal = () => {
    return meals.map((eachMeal) => {
      console.log(eachMeal.id)
      return(
        <div>
         <h3>Name {eachMeal.title}</h3>
         <MealDetails mealId={eachMeal.id}/>
        </div>

         )
    });
  };

  return (
    <div>
      {ShowMeal()}
      <ul>
        <h3>Nutrients</h3>
        <li>Calories: {nutrients.calories}</li>
        <li>Proteins: {nutrients.protein}</li>
      </ul>
    </div>
  );
}

export default MealInfo;
