import React, { useState, useEffect } from "react";
import axios from "axios";
import MealInfo from "./MealInfo";

function MealPlan() {
  const [calories, setCalories] = useState(0);
  const [mealData, setMealData] = useState(null);
  const [toggle, setToggle] = useState(false);

  const HandleChange = (e) => {
    setCalories(e.target.value);
    console.log(calories);
  };

  const GetMealData = async () => {
    let res = await axios.get(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=ca057c6f67c2475daf2c9fce38263c5a&timeFrame=week&targetCalories=${calories}`
    );
    console.log(res);
    setMealData(res.data);
  };

  const ShowData = () => {
    console.log("Semra");
    return Object.keys(mealData.week).map((key) => {
      return (
        <div>
          <h2>{key}</h2>
          <MealInfo day={mealData.week[key]} />
        </div>
      );
    });
  };

  useEffect(() => {
    GetMealData();
  }, []);

  return (
    <div>
      <input type="number" placeholder="calories" onChange={HandleChange} />
      <button onClick={() => setToggle(true)}>
        {/* {(toggle && "New Search") || "Start Search"} */} Search
      </button>
      {toggle && ShowData()}
    </div>
  );
}

export default MealPlan;
