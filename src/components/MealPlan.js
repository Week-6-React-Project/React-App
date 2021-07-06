import React, { useState, useEffect } from "react";
import axios from "axios";
import MealInfo from "./MealInfo";
import "./MealPlan.css";

function MealPlan({ aboutRef, teamRe, homeRef }) {
  const [calories, setCalories] = useState(0);
  const [mealData, setMealData] = useState(null);
  const [toggle, setToggle] = useState(false);

console.log(homeRef)


  const HandleChange = (e) => {
    setCalories(e.target.value);
    // console.log(calories);
  };

  const GetMealData = async () => {
    let res = await axios.get(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=ea78a6619ab541c4bd2f63c9a56b443f&timeFrame=week&targetCalories=${calories}`
    );
    // console.log(res);
    setMealData(res.data);
  };

  const ShowData = () => {
    // console.log(mealData);
    return Object.keys(mealData?.week).map((key) => {
      return (
        <div className="daily-plan">
          <h2>{key}</h2>
          <MealInfo day={mealData?.week[key]} />
        </div>
      );
    });
  };

  useEffect(() => {
    GetMealData();
  }, []);

  return (
    <div className="meal-plan">
      <h1>Meal Plan</h1>
      <div className="search-button">
        <input type="number" placeholder="calories" onChange={HandleChange} />
        <button onClick={() => setToggle(true)}>
          {/* {(toggle && "New Search") || "Start Search"} */} Search
        </button>
      </div>
      {toggle && ShowData()}
    </div>
  );
}

export default MealPlan;
