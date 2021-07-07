import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddRecipes.css";
import { useHistory } from "react-router-dom";

function AddRecipes(props) {
  console.log(props);
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [allRecipes, setAllRecipes] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "instructions") {
      setInstructions(e.target.value);
    } else if (e.target.name === "image") {
      setImage(e.target.value);
    } else if (e.target.name === "author") {
      setAuthor(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      instructions,
      image,
      author,
    };
    //console.log(newRecipe)
    let res = await axios.post(
      "https://ironrest.herokuapp.com/NutriYoga",
      newRecipe
    );
    //console.log(res)
  };

  useEffect(async () => {
    let res = await axios.get(`https://ironrest.herokuapp.com/NutriYoga`);
    setAllRecipes(res.data);
    showRecipes();
    console.log(res.data);
  }, []);

  const showRecipes = () => {
    return allRecipes.map((eachRecipe) => {
      return (
        <div className="show-recipe">
          <h3> {eachRecipe.title} </h3>
          <h4> Author: {eachRecipe.author} </h4>
          <div>
            <img src={eachRecipe.image} width="300px" />
          </div>

          <p> {eachRecipe.instructions} </p>
          <button onClick={() => deleteRecipe(eachRecipe._id)}>DELETE</button>
        </div>
      );
    });
  };

  const deleteRecipe = async (id) => {
    let res = await axios.delete(
      `https://ironrest.herokuapp.com/NutriYoga/${id}`
    );
  };

  return (
    <div className="add-recipes">
      <h1>Add recipe</h1>

      <div className="main-recipes">
        <div>
          <form onSubmit={handleSubmit}>
            <label>Title: </label>
            <input onChange={handleChange} type="text" name="title" />
            <br></br>
            <label>Instructions: </label>
            <input onChange={handleChange} type="text" name="instructions" />
            <br></br>
            <label>Image: </label>
            <input onChange={handleChange} type="text" name="image" />
            <br></br>
            <label>Author: </label>
            <input onChange={handleChange} type="text" name="author" />
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
        <h1>New Recipe</h1>
        <div className="new-recipes">{showRecipes()}</div>
      </div>
    </div>
  );
}

export default AddRecipes;
