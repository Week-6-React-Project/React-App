import "./App.css";
import NavBar from "./components/NavBar";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import MealPlan from "./components/MealPlan";
import Recipes from "./components/Recipes";
import Team from "./components/Team";
import About from "./components/About";
import Yoga from "./components/Yoga";
import YogaDetails from "./components/YogaDetails";
import React, { useRef } from "react";

import "@fontsource/gabriela";
require("typeface-gabriela");

function App() {
  const aboutRef = useRef(null);
  const teamRef = useRef(null);

  const scrollToAbout = () =>
    aboutRef.current.scrollInfoView({ behavior: "smooth", block: "center" });

  const scrollToTeam = () =>
    teamRef.current.scrollInfoView({ behavior: "smooth", block: "center" });

  return (
    <div className="App">
      <NavBar scrollToAbout={scrollToAbout} scrollToTeam={scrollToTeam} />

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home aboutRef={aboutRef} teamRef={teamRef} {...props} />
          )}
        ></Route>
        <Route
          exact
          path="/meal-plan"
          render={(props) => <MealPlan {...props} />}
        ></Route>
        <Route
          exact
          path="/recipes"
          render={(props) => <Recipes {...props} />}
        ></Route>
        <Route
          exact
          path="/yoga"
          render={(props) => <Yoga {...props} />}
        ></Route>
        <Route
          exact
          path="/yoga/:id"
          render={(props) => <YogaDetails {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
