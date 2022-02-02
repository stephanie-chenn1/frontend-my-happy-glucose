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

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/users/1/meals")
      .then((response) => {
        setMealsData([...response.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Router>
        <NavList />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/meals" exact element={<Meals />} />
          <Route path="/glucose" exact element={<Glucose />} />
          <Route
            path="/track-a-meal"
            exact
            element={
              <MealTracker mealsData={mealsData} setMealsData={setMealsData} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
