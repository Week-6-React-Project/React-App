import React, { useState } from "react";
import axios from "axios";
import "./AddRecipes.css";

function AddRecipes() {










return (

<div className = "add-recipes">
      <h1>Add recipe</h1>


      <div className="main-recipes">
 <div>
   <form>
      <label>Title: </label>
    <input type="text" name="title"/>
    <br></br>
    <label>Instructions: </label>
    <input type="text" name="instructions"/>
    <br></br>
    <label>Image: </label>
    <input type="text" name="image"/>
    <br></br>
    <label>Author: </label>
    <input type="text" name="author"/>
    <br></br>
    <br></br>
    <button type="submit">Submit</button>
   </form>
   </div>
   <div>
       New Recipe
   </div>

      </div>
     
</div>
    )
}

export default AddRecipes
