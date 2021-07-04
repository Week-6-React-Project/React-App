import React, { useState, useEffect } from "react";
import axios from "axios";

function YogaVideo({ name }) {
  console.log(name);
  const [yogaVideo, setYogaVideo] = useState();

  useEffect(async () => {
    let res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${name}+yoga+pose&m[…]Search=moderate&key=AIzaSyAxwXoDEUnEdC2QQtJx56xLOtltjSRS234`
    );
    console.log(res);
  }, []);

  return <div>Yoga Video</div>;
}

export default YogaVideo;
