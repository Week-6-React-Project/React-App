import axios from 'axios';
import React, {useEffect, useState} from 'react';

function MealDetails({mealId}) {
//   console.log(mealId)
const[details, setDetails] = useState({});

const getMealDetails = async () => {
    let res = await axios.get(`https://api.spoonacular.com/recipes/${mealId}/information?apiKey=74655840ee6247938738e3747cddf842`)
    setDetails(res.data);
  
}


useEffect(() => {
getMealDetails()
}, [mealId]) 

const showDetails = () => {
    return (
        <div>
        <img src={details.image} width="200px"/>
        <p> {details.instructions} </p>
        <p> {details.readyInMinutes} </p>
        </div>
        
    )
}



    return (
        <div>

            {showDetails()}
        </div>
    )
}

export default MealDetails
