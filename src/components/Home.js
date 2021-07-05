import React, { useState, useEffect } from "react";
import axios from "axios";
import About from "./About";
import Team from "./Team";

function Home() {
  const [randomQuotes, setRandomQuotes] = useState([]);

  useEffect(async () => {
    let res = await axios.get(`https://type.fit/api/quotes`);

    setRandomQuotes(res.data);
  }, []);

  const showRandomQuote = () => {
    let randomQuote =
      randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
    return (
      <div>
        <h2>{randomQuote?.text}</h2>
        <p>{randomQuote?.author}</p>
      </div>
    );
  };

  return (
    <div>
      <p>{showRandomQuote()}</p>
      <About />
      <Team />
    </div>
  );
}

export default Home;
