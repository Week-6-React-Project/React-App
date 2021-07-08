import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import About from "./About";
import Team from "./Team";
import Footer from "./Footer";
import "./Home.css";

function Home({ aboutRef, teamRef, homeRef, offSetY }) {
  const [randomQuote, setRandomQuote] = useState({});
  
//  const [offSetY, setOffSetY] = useState(0);

//  const handleScrollUp = () => {
//      setOffSetY(window.pageYOffset);
//  };


//PARALAX HOME SCREEN
//  useEffect( () => {
//   window.addEventListener("scroll", handleScrollUp)
//   return() => window.removeEventListener("scroll", handleScrollUp)
  

// }, []);

  useEffect(async () => {
    let res = await axios.get(`https://type.fit/api/quotes`);
   
    let quote = res.data[Math.floor(Math.random() * res.data?.length)+1];
   setRandomQuote(quote);
   
    setInterval(() => {
   let quote = res.data[Math.floor(Math.random() * res.data?.length)+1];
   setRandomQuote(quote);
    }, 12000)
  }, []);

  
    
  const showRandomQuote = () => {

    return (
      <div className="quote-text">
  
        <h2>"{randomQuote?.text}"</h2>
        <p style={{fontStyle:"italic"}}>{randomQuote?.author}</p>
        
      </div>
    );
  };

  // <div style={{ visibility: this.state.driverDetails.firstName != undefined? 'visible': 'hidden'}}></div>

  return (
    <div ref={homeRef} className="home">
      <header className="quote" style={{transform:`translateY(${Math.min(offSetY*1.6, 1000) }px)`}}>
        <div className="pic-logo">
          <img src="../../images/background-new.png" />
        </div>
        {showRandomQuote()}
      </header>
      <About aboutRef={aboutRef} offSetY={offSetY} />
      <Team teamRef={teamRef} />
      <Footer />
    </div>
  );
}

export default Home;
