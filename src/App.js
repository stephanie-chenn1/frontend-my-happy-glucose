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
import Glucose from "./pages/Glucose";
import MealTracker from "./pages/TrackAMeal";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [mealsData, setMealsData] = useState([]);
  const [numOfMealsSubmitted, setNumOfMealsSubmitted] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/users/1/meals")
      .then((response) => {
        console.log(response.data);
        setMealsData([...response.data]);
      })
      .catch((err) => console.log(err));
  }, []);

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
                setNumOfMealsSubmitted={setNumOfMealsSubmitted}
                mealsData={mealsData}
                setMealsData={setMealsData}
              />
            }
          />
          <Route
            path="/meals"
            exact
            element={
              <Meals mealsData={mealsData} setMealsData={setMealsData} />
            }
          />
          <Route path="/glucose" exact element={<Glucose />} />
          <Route
            path="/track-a-meal"
            exact
            element={
              <MealTracker
                setNumOfMealsSubmitted={setNumOfMealsSubmitted}
                numOfMealsSubmitted={numOfMealsSubmitted}
                mealsData={mealsData}
                setMealsData={setMealsData}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
