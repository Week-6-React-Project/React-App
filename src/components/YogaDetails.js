import React, { useState, useEffect } from "react";
import { Switch, Link, Route } from "react-router-dom";
import axios from "axios";
import YogaVideo from "./YogaVideo";
import "./YogaDetails.css";


function YogaDetails({id}) {
  const [yogaDetails, setYogaDetails] = useState({});
 

  useEffect(async () => {
    if(id){
       let res = await axios.get(
      `https://lightning-yoga-api.herokuapp.com/yoga_poses/${id}`
    );
    setYogaDetails(res.data);
    }
  }, [id]);


  return (
  

      <div className="yoga-details">
        <h1>English name: {yogaDetails.english_name} </h1>

        <h3>Sanskrit name: {yogaDetails.sanskrit_name} </h3>
        <img src={yogaDetails.img_url} width="60px" />

        {yogaDetails.yoga_categories?.map((element) => {
        //   console.log(element);
          return (
            <>
              <h4> Category: {element.name} </h4>
              <p> Description: {element.description} </p>
            </>
          );
        })}
        <YogaVideo name={yogaDetails.english_name} />
      </div>
  
  );
}

export default YogaDetails;
