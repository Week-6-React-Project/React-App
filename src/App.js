import "./App.css";
import NavBar from "./components/NavBar";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import MealPlan from "./components/MealPlan";
import Recipes from "./components/Recipes";
import Team from "./components/Team";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />}></Route>
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
      </Switch>
    </div>
  );
}

export default App;
