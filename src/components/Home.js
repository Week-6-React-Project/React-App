import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import About from "./About";
import Team from "./Team";
import Footer from "./Footer";
import "./Home.css";

function Home({ aboutRef, teamRef, homeRef }) {
  const [randomQuotes, setRandomQuotes] = useState([]);

  useEffect(async () => {
    let res = await axios.get(`https://type.fit/api/quotes`);

    setRandomQuotes(res.data);
  }, []);

  const showRandomQuote = () => {
    let randomQuote =
      randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
    return (
      <div className="quote-text">
        <h2>{randomQuote?.text}</h2>
        <p>{randomQuote?.author}</p>
      </div>
    );
  };

  return (
    <div ref={homeRef} className="home">
      <header className="quote">
        <div className="pic-logo">
          <img src="../../images/background-new.png" />
        </div>
        {showRandomQuote()}
      </header>
      <About aboutRef={aboutRef} />
      <Team teamRef={teamRef} />
      <Footer />
    </div>
  );
}

export default Home;
