import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ scrollToAbout, scrollToTeam }) {
  return (
    <nav>
      <div className="header-logo">
        <img src="../../images/navbar-new2.png" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/meal-plan">Meal Plan</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
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
    </nav>
  );
}

export default NavBar;
