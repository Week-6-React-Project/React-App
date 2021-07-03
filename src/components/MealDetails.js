import axios from 'axios';
import React, {useEffect, useState} from 'react';

function MealDetails({mealId}) {
//   console.log(mealId)
const[details, setDetails] = useState({});

const getMealDetails = async () => {
    let res = await axios.get(`https://api.spoonacular.com/recipes/${mealId}/information?apiKey=6ad6c6d5a43847b09d5b0df4c5296614`)
    setDetails(res.data);
    console.log(details.image)
}


useEffect(() => {
getMealDetails()
}, [mealId]) 

const showDetails = () => {
    return (
        <img src={details.image} width="200px"/>
    )
}



    return (
        <div>
            {showDetails()}
        </div>
    )
}

export default MealDetails
