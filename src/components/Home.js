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

    //PARALAX EFFECT HOME SCREENif

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

  // <div style={{ visibility: this.state.driverDetails.firstName != undefined? 'visible': 'hidden'}}></div>

  return (
    <div ref={homeRef} className="home">
      <header className="quote"    style={{transform:`translateY(${offSetY*1.6}px)`, display: offSetY>700 ? 'none' : 'flex'}}>
        <div className="pic-logo">
          <img src="../../images/background-new.png" />
        </div>
        {showRandomQuote()}
      </header>
      <About aboutRef={aboutRef} offSetY={offSetY} handleScrollUp={handleScrollUp}/>
      <Team teamRef={teamRef} />
      <Footer />
    </div>
  );
}

export default Home;
