import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
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
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Team</Link>
      </li>
    </nav>
  );
}

export default NavBar;
