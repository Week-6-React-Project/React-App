import React, { useState, useEffect, useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import "./About.css";

function About({ aboutRef, handleScrollUp, offSetY }) {
  // const [randomQuote, setRandomQuote] = useState({});

  // const [offSetY, setOffSetY] = useState();

  // const handleScrollUp = () => {
  //   setOffSetY(window.pageYOffset);

  // };

  // useEffect( () => {
  // window.addEventListener("scroll", handleScrollUp)
  // return() => window.removeEventListener("scroll", handleScrollUp)
  // }, [])

  return (
    <div>
      <section ref={aboutRef} className="about">
        <h3>ABOUT</h3>
        <p>
          Diet and exercise have long been respected as two key players in
          maintaining your heath. If you take a holistic approach, you know that
          diet and exercise alone won’t create overall wellbeing, but they
          certainly are main factors to success. While there are benefits to
          many different types of exercise, today we’re looking specifically at
          yoga and how practicing yoga along with eating a healthy diet will
          help you create a total picture of health. Holistic nutrition and yoga
          philosophy have a lot in common. Using the two disciplines together
          can maximize your health benefits, yielding greater physical and
          emotional results than practicing one of them alone. To see results,
          practice at least a few yoga postures daily, giving yourself time to
          calm and center through deep breathing both before and after.
        </p>
        <div className="circle-img">
          <div>
            <img src="../../images/Balance.png" />
            <h4>Balance</h4>
          </div>
          <div>
            <img src="../../images/flexibility.png" />
            <h4>Flexibility</h4>
          </div>
          <div>
            <img src="../../images/strength.png" />
            <h4>Strength</h4>
          </div>
          <div>
            <img src="../../images/energy.png" />
            <h4>Energy</h4>
          </div>
        </div>
        <p id="text">
          Nutrition is a more delicate balance. Be sure to eat balanced meals
          and not to go longer than 4 hours without food, to maintain a stable
          blood sugar level. Tuning into your body through yoga will enable you
          to decipher your body’s cues around food so that you can make the best
          possible choices for you. There are many overlapping benefits of
          nutrition and yoga including improving digestion, stress management,
          mindfulness, increasing energy and even detoxification. Eating well
          and practicing yoga can help you maximize your overall health benefits
          in these areas.
        </p>{" "}
        <div className="about-bottom-image">
         <h3>
         ”Your body exists in the past and your mind exists in the future. In yoga, they come together in the present.” 
         <br/>― B.K.S.Iyengar<br/>
         </h3>


        </div>
      </section>
    </div>
  );
}

// <div style={{ visibility: this.state.driverDetails.firstName != undefined? 'visible': 'hidden'}}></div>

export default About;
