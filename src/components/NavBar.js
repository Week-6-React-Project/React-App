import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function NavBar({ scrollToAbout, scrollToTeam, scrollToHome }) {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(toggle)
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    handleToggle();
  };

  const handleToggle = () => {
    if (window.innerWidth < 1000) {
      setToggle(false);
    }
    if (window.innerWidth >= 1000) {
      setToggle(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <nav>
      <div className="header-logo">
        <Link to="/">
          <img src="../../images/navbar-new2.png" />
        </Link>
      </div>
      <div className="burger" onClick={() => setToggle(!toggle)}>
        {(toggle && <FontAwesomeIcon icon={faTimes} />) || (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      {toggle && (
        <ul className="big-screen">
          <li>
            <Link onClick={scrollToHome} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/meal-plan">Meal Plan</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/addrecipe"> Add Recipe</Link>
          </li>
          <li>
            <Link to="/yoga">Yoga</Link>
          </li>
          <li onClick={scrollToAbout}>
            <Link to="/">About</Link>
          </li>
          <li onClick={scrollToTeam}>
            <Link to="/">Team</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
