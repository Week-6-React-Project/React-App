import React, { useState, useEffect } from "react";
import { Switch, Link, Route } from "react-router-dom";
import axios from "axios";
import YogaVideo from "./YogaVideo";
import "./YogaDetails.css";


function YogaDetails({id}) {
  const [yogaDetails, setYogaDetails] = useState(null);
 

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
   {yogaDetails && 
         
      <>
        <h1>English name: {yogaDetails.english_name} </h1>

        <h3>Sanskrit name: {yogaDetails.sanskrit_name} </h3>
        <img src={yogaDetails.img_url} width="60px" />

        {yogaDetails.yoga_categories?.map((element) => {
        //   console.log(element);
          return (
            <>
              <h4><strong> Category:</strong> {element.name} </h4>
              <p><strong>Description:</strong>  {element.description} </p>
            </>
          );
        })}
        {/* <YogaVideo name={yogaDetails.english_name} /> */}
        </>
    
      || <h1>Select a yoga pose</h1>
        }

     </div>
  
  );
}

export default YogaDetails;
