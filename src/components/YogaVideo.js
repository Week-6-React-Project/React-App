import React, { useState, useEffect } from "react";
import axios from "axios";

function YogaVideo({name}) {
  // console.log(name);

  //  let searchName = name.split(" ").map(each => each.toLowerCase()).join(" ");

  const [yogaVideo, setYogaVideo] = useState(null);
  const [searchName, setSearchName] = useState(name)



const videoFromYoutube = async() => {
  //  setSearchName(name)

  let res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${searchName}+yoga+pose&m[…]Search=moderate&key=AIzaSyBuEy6Xh9D49ZqEA5TM-eEIH3OItMiCTDo`
      );
      setYogaVideo(res.data.items[0])
  

}

  useEffect( () => {
     videoFromYoutube()
  }, [yogaVideo]);

 const showVideo = () => {
  return (
    <div>
      <h2> {yogaVideo.snippets?.title} </h2>
          <p> {yogaVideo.snippets?.description} </p>
         <iframe width="560" height="315" src= {`https://www.youtube.com/embed/${yogaVideo.id.videoId}`} frameBorder="0" allow="autoplay; encryptedMedia; gyroscope; pictureInPicture"> </iframe>
    </div>
  )
  //  return yogaVideo.map(video => {
  //    return (
  //      <div>
  //        <h2> {video.snippets?.title} </h2>
  //        <p> {video.snippets?.description} </p>
  //        <iframe width="560" height="315" src= {`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture"> </iframe>
  //      </div>
  //    )
  //  })
 }



  return <div> {yogaVideo!==null && showVideo()} </div>;
}

export default YogaVideo;
