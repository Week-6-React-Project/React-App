import React from "react";
import { Link } from "react-router-dom";

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
        <a href="#about" />
        About
      </li>
      <li>
        <a href="#team" />
        Team
      </li>
    </nav>
  );
}

export default NavBar;
