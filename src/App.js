import "./App.css";
import NavList from "./components/NavList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import MealTracker from "./pages/TrackAMeal";
import GlucoseTracker from "./pages/TrackGlucose";
import Glucose from "./pages/Glucose";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // const [mealsData, setMealsData] = useState([]);
  const [numOfMealsSubmitted, setNumOfMealsSubmitted] = useState(0);
  const [numOfGlucoseSubmitted, setNumOfGlucoseSubmitted] = useState(0);
  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/users/1/meals")
  //     .then((response) => {
  //       console.log(response.data);
  //       setMealsData([...response.data]);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <Router>
        <NavList />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                numOfMealsSubmitted={numOfMealsSubmitted}
                numOfGlucoseSubmitted={numOfGlucoseSubmitted}
              />
            }
          />
          <Route path="/meals" exact element={<Meals />} />
          <Route
            path="/track-a-meal"
            exact
            element={
              <MealTracker
                setNumOfMealsSubmitted={setNumOfMealsSubmitted}
                numOfMealsSubmitted={numOfMealsSubmitted}
              />
            }
          />
          <Route
            path="/track-glucose"
            exact
            element={
              <GlucoseTracker
                setNumOfGlucoseSubmitted={setNumOfGlucoseSubmitted}
                numOfGlucoseSubmitted={numOfGlucoseSubmitted}
              />
            }
          />
          <Route path="/glucose" exact element={<Glucose />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
