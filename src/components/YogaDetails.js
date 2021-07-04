import React, { useState, useEffect } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import axios from 'axios';

function YogaDetails(props) {
    const [yogaDetails, setYogaDetails] = useState({})
    console.log(props)

    useEffect(async () => {
        let res = await axios.get(`https://lightning-yoga-api.herokuapp.com/yoga_poses/${props.match.params.id}`);
   
       setYogaDetails(res.data)
        }, [props])
    //  console.log(yogaDetails.yoga_categories?.map(element=>element))

    return (
        <div>
             <div className="col-7"> 
                 <h1>English name: {yogaDetails.english_name} </h1>
                 <table className="table">
                 <thead></thead>
                 <tbody>
                 <h3>Sanskrit name: {yogaDetails.sanskrit_name} </h3>
                 <img src ={yogaDetails.img_url} width="60px"/>
               
                       {yogaDetails.yoga_categories?.map(element => {
                           console.log(element)
                         return(
                             <>
                             <h4>Category: {element.name} </h4>
                              <p>Description: {element.description} </p>
                             </>
                         )
                       })}
                       </tbody>
                    </table>

            </div> 
       </div>
    )
}

export default YogaDetails
