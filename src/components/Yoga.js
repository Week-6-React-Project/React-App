import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Yoga.css";
import YogaDetails from "./YogaDetails";
import { element } from "prop-types";

function Yoga() {
  const [yoga, setYoga] = useState([]);
  const [yogaPose, setYogaPose] = useState({});

  const getYogaInfo = async () => {
    let res = await axios.get(
      `https://lightning-yoga-api.herokuapp.com/yoga_poses`
    );
    //    console.log(res.data.items)
    setYoga(res.data.items);
  };

  useEffect(() => {
    getYogaInfo();
  }, []);

  const showYogaInfo = () => {
    return yoga.map((element) => {
      return (
        <div className="yoga-poses" key={element.id}>
          <img src={element.img_url} width="60px" />
          <button
            onClick={() => setYogaPose(element)}
            className="list-group-item list-group-item-action"
          >
            <h2> {element.english_name} </h2>
          </button>
        </div>
      );
    });
  };

  //    to={`/yoga/${element.id}`}
  return (
    <div className="yoga-exercices">
      <div className="yoga-list">
        <div>{showYogaInfo()}</div>
      </div>
      <YogaDetails id={yogaPose.id} />
    </div>
  );
}

export default Yoga;
