import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Yoga() {
   const [yoga, setYoga] = useState([])

   const getYogaInfo = async () => {
       let res = await axios.get(`https://lightning-yoga-api.herokuapp.com/yoga_poses`);
       console.log(res.data.items)
       setYoga(res.data.items)
   }

   useEffect(() => {
       getYogaInfo()

   }, [])

   const showYogaInfo = () => {
       return yoga.map((element) => {
           return(
               <div key={element.id}>
                   <Link className="list-group-item list-group-item-action" to={`/yoga/${element.id}`}>
                   <h2> {element.english_name} </h2>
                   </Link>
                   
               </div>
           )
       })
   }


    return (
        <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
            {showYogaInfo()} 
            </div>
            </div>
        </div>
        </div>
    )
}

export default Yoga
