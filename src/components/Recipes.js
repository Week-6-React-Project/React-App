import React, {useState} from "react";
import axios from 'axios';
import Instructions from './Instructions';

function Recipes() {

const [foodByIngredient, setFoodByIngredient] = useState([]);
const [name, setName] = useState("");


const searchByIngredient = async (e) => {
  e.preventDefault()
 console.log("click") 
let res = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=c40a678376e24366886a26ba00de5aab&ingredients=${name}`)

setFoodByIngredient(res.data)
setName("")

}




const showFoodByIngredients = () => {
  return foodByIngredient.map(eachFood => {
  return (

  <div>
    <h2>{eachFood.title}</h2>
    <img src={eachFood.image}/>
    <Instructions id={eachFood.id}/>
  </div>

  )

  })
}


  return (

  <div>
    {console.log(foodByIngredient)}
    <label>
   
      Search by ingredient  
      <input onChange={(e) => setName(e.target.value) } name="name" value={name} type="text" placeholder="Ingredient"/>
     
    </label>
     
    <button onClick={(e) => searchByIngredient(e)}>Search</button>

    {showFoodByIngredients()}
    
    </div>

  )
}

export default Recipes;
