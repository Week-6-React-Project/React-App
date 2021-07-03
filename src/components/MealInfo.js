import React from "react";

function MealInfo({ day }) {
  console.log(day);
  const { meals, nutrients } = day;

  const ShowMeal = () => {
    return meals.map((eachMeal) => {
      return <h3>Name {eachMeal.title}</h3>;
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
