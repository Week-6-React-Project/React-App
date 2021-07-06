import React, { useState } from "react";
import axios from "axios";
import Instructions from "./Instructions";
import "./Recipes.css";

function Recipes() {
  const [foodByIngredient, setFoodByIngredient] = useState([]);
  const [name, setName] = useState("");

  const searchByIngredient = async (e) => {
    e.preventDefault();

    let res = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=c40a678376e24366886a26ba00de5aab&ingredients=${name}`
    );

    setFoodByIngredient(res.data);
    setName("");
  };

  const showFoodByIngredients = () => {
    return foodByIngredient.map((eachFood) => {
      return (
        <div className="food-info">
          <h2>{eachFood.title}</h2>
          <div className="food-content">
            <img src={eachFood.image} />
            <Instructions id={eachFood.id} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="recipes">
      <h1>Recipes</h1>
      <div className="search-button">
        <label>
          <input
            onChange={(e) => setName(e.target.value)}
            name="name"
            value={name}
            type="text"
            placeholder="Search by ingredients"
          />
        </label>

        <button onClick={(e) => searchByIngredient(e)}>Search</button>
      </div>

      {showFoodByIngredients()}
    </div>
  );
}

export default Recipes;
