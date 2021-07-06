import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import About from "./About";
import Team from "./Team";
import Footer from "./Footer";
import "./Home.css";

function Home({ aboutRef, teamRef, homeRef }) {
  const [randomQuote, setRandomQuote] = useState({});

 const [offSetY, setOffSetY] = useState(0);

 const handleScrollUp = () => {
   setOffSetY(window.pageYOffset);
   //console.log(offSetY)
 };


//PARALAX HOME SCREEN
//  useEffect( () => {
//   window.addEventListener("scroll", handleScrollUp)
//   return() => window.removeEventListener("scroll", handleScrollUp)
  

// }, []);



  useEffect(async () => {
    let res = await axios.get(`https://type.fit/api/quotes`);
   
    let quote = res.data[Math.floor(Math.random() * res.data.length)];
  
    setRandomQuote(quote);

    //PARALAX EFFECT HOME SCREEN
     window.addEventListener("scroll", handleScrollUp)
    return() => window.removeEventListener("scroll", handleScrollUp)
  }, []);




  const showRandomQuote = () => {

    return (
      <div className="quote-text">
        <h2>{randomQuote?.text}</h2>
        <p>{randomQuote?.author}</p>
      </div>
    );
  };

  return (
    <div ref={homeRef} className="home">
      <header className="quote" style={{transform:`translateY(-${offSetY*0.3}px)`}}>
        <div className="pic-logo">
          <img src="../../images/background-new.png" />
        </div>
        {showRandomQuote()}
      </header>
      <About aboutRef={aboutRef}  />
      <Team teamRef={teamRef} />
      <Footer />
    </div>
  );
}

export default Home;
