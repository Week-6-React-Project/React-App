import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Instructions.css";

function Instructions({ id }) {
  const [recipeDetails, setRecipeDetails] = useState({});

  const searchByIngredient = async () => {
    // console.log("click");
    let res = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=c40a678376e24366886a26ba00de5aab`
    );

    setRecipeDetails(res.data);
  };

  useEffect(() => {
    searchByIngredient();
  }, []);

  const showRecipeDetails = () => {
    return (
      <div className="ingredient">
        <ul>
          {recipeDetails.diets?.map((each) => {
            return <li>{each}</li>;
          })}
        </ul>
        <div className="ready-servings">
          <p>Ready in: {recipeDetails.readyInMinutes} min</p>
          <p>Servings: {recipeDetails.servings} </p>
        </div>
        <p
          className="instructions"
          dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
        ></p>
      </div>
    );
  };

  return <div>{showRecipeDetails()}</div>;
}

export default Instructions;
