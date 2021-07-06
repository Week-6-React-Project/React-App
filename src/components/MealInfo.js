import React from "react";
import MealDetails from "./MealDetails";
import "./MealInfo.css";

function MealInfo({ day }) {
  console.log(day);
  const { meals, nutrients } = day;

  const ShowMeal = () => {
    return meals.map((eachMeal) => {
      console.log(eachMeal);
      return (
        <div>
          <h3>{eachMeal.title}</h3>
          <MealDetails mealId={eachMeal.id} />
        </div>
      );
    });
  };

  return (
    <div className="meal-info">
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
