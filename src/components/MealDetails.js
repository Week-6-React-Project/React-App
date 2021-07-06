import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MealDetails.css";

function MealDetails({ mealId }) {
  //   console.log(mealId)
  const [details, setDetails] = useState({});

  const getMealDetails = async () => {
    let res = await axios.get(
      `https://api.spoonacular.com/recipes/${mealId}/information?apiKey=ea78a6619ab541c4bd2f63c9a56b443f`
    );
    setDetails(res.data);
  };

  useEffect(() => {
    getMealDetails();
  }, [mealId]);

  const showDetails = () => {
    return (
      <div className="meal-instructions">
        <img src={details.image} width="300px" />
        <p className="instructions-p"> {details.instructions} </p>
        <p> Ready in: {details.readyInMinutes} minutes </p>
      </div>
    );
  };

  return <div>{showDetails()}</div>;
}

export default MealDetails;
