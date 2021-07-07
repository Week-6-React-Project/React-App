import React, {useState, useEffect, useRef} from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
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
    <div >
 
      <section ref={aboutRef} className="about">
        <h3>ABOUT</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>  <div className="about-bottom-image" style={{transform:`translateY(${offSetY*0.4}px)`}}></div>
      </section>
    
    </div>
  );
}

  // <div style={{ visibility: this.state.driverDetails.firstName != undefined? 'visible': 'hidden'}}></div>

export default About;
