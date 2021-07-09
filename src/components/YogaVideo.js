import React, { useState, useEffect } from "react";
import axios from "axios";

function YogaVideo({name}) {
  // console.log(name);

  //  let searchName = name.split(" ").map(each => each.toLowerCase()).join(" ");

  const [yogaVideo, setYogaVideo] = useState(null);

console.log(name)


// const videoFromYoutube = async() => {
//   //  setSearchName(name)
// if(name){
//   let res = await axios.get(
//         `https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${name}+yoga+pose&m[…]Search=moderate&key=AIzaSyAlfEYVUpHRPEigzw3E0wof3kri4H7wgBs`
//       );
//       setYogaVideo(res.data.items[0])
// }
  
  

// }

  useEffect(async () => {

   // https://iron-cors-anywhere.herokuapp.com
    if(name){
      //console.log("Find video with name", name)
      let res = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${name}+yoga+pose&m[…]Search=moderate&key=AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M`
        
            
          );
          //console.log(res)
          setYogaVideo(res.data.items[0])
    }

    
  }, [name]);
  //console.log(yogaVideo)
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
