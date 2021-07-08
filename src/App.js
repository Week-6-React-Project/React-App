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
import React, { useRef, useState, useEffect } from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import AddRecipes from "./components/AddRecipes";



import "@fontsource/gabriela";
require("typeface-gabriela");

function App() {
  const [offSetY, setOffSetY] = useState(0);

  const handleScrollUp = () => {
      setOffSetY(window.pageYOffset);
      console.log(offSetY)
  };


  const aboutRef = useRef(null); //SCROLL TO ABOUT
  const teamRef = useRef(null); //SCROLL TO TEAM
  const homeRef = useRef(null); //SCROLL TO HOME

 useEffect( () => {
  window.addEventListener("scroll", handleScrollUp)
  return() => window.removeEventListener("scroll", handleScrollUp)
  }, [])


  const scrollToAbout = () => {
    if(aboutRef.current !== null){
      window.scrollTo({top:aboutRef.current.offsetTop, behavior:'smooth'})
    }else{
      return <About/>
    }
     
  }


  const scrollToTeam = () => {
    if(teamRef.current !== null){
      window.scrollTo({top:teamRef.current.offsetTop, behavior:'smooth'})
  } else{
    return <Team/>
  }
}


  const scrollToHome = () =>{
    if(homeRef.current !== null){
       window.scrollTo({top:homeRef.current.offsetTop, behavior:'smooth'})
    }else{
      return <Home/>
    }
   
  }


  return (
    <div className="App">
      <NavBar scrollToAbout={scrollToAbout} scrollToTeam={scrollToTeam} scrollToHome={scrollToHome} />

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home aboutRef={aboutRef} teamRef={teamRef} {...props} homeRef={homeRef} offSetY={offSetY}/>
          )}
        ></Route>
        <Route
          exact
          path="/meal-plan"
          render={(props) => <MealPlan aboutRef={aboutRef} teamRef={teamRef} {...props} homeRef={homeRef} {...props} />}
        ></Route>
        <Route
          exact
          path="/recipes"
          render={(props) => <Recipes {...props} />}
        ></Route>
         <Route
          exact
          path="/addrecipe"
          render={(props) => <AddRecipes {...props} />}
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
