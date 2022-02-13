import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import Fitness from "./pages/Fitness";
import MealTracker from "./pages/TrackAMeal";
import GlucoseTracker from "./pages/TrackGlucose";
import Glucose from "./pages/Glucose";
import FitnessTracker from "./pages/TrackFitness";
import MoodTracker from "./pages/TrackMood";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [numOfMealsSubmitted, setNumOfMealsSubmitted] = useState(0);
  const [numOfGlucoseSubmitted, setNumOfGlucoseSubmitted] = useState(0);
  const [numOfFitnessSubmitted, setNumOfFitnessSubmitted] = useState(0);
  const [numOfMoodSubmitted, setNumOfMoodSubmitted] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route
            path="/dashboard"
            exact
            element={
              <Home
                numOfMealsSubmitted={numOfMealsSubmitted}
                numOfGlucoseSubmitted={numOfGlucoseSubmitted}
                numOfFitnessSubmitted={numOfFitnessSubmitted}
                numOfMoodSubmitted={numOfMoodSubmitted}
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
          <Route
            path="/track-fitness"
            exact
            element={
              <FitnessTracker
                setNumOfFitnessSubmitted={setNumOfFitnessSubmitted}
                numOfFitnessSubmitted={numOfFitnessSubmitted}
              />
            }
          />
          <Route path="/fitness" exact element={<Fitness />} />
          <Route
            path="/track-mood"
            exact
            element={
              <MoodTracker
                setNumOfMoodSubmitted={setNumOfMoodSubmitted}
                numOfMoodSubmitted={numOfMoodSubmitted}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
