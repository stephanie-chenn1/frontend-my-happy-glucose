import "./App.css";
import NavList from "./components/NavList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import Glucose from "./pages/Glucose";
import TrackMeal from "./pages/TrackAMeal";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const [formFields, setFormFields] = useState({
    qty: "",
    unit: "",
    food: "",
    time: "00:00",
    date: "",
  });
  const [isQtyValid, setQtyValid] = useState(true);
  const [mealsData, setMealsData] = useState([]);

  const handleUnitChange = (e) => {
    setFormFields({
      ...formFields,
      unit: e.target.value,
    });
  };

  const handleQtyChange = (e) => {
    if (e.target.value <= 0) {
      setQtyValid(false);
    } else {
      setQtyValid(true);
    }

    setFormFields({
      ...formFields,
      qty: e.target.value,
    });
  };

  const handleFoodChange = (e) => {
    setFormFields({
      ...formFields,
      food: e.target.value,
    });
  };

  const handleTimeChange = (e) => {
    setFormFields({
      ...formFields,
      time: e.target.value,
    });
  };

  const handleDateChange = (e) => {
    setFormFields({
      ...formFields,
      date: e.target.value,
    });
  };

  const addNewMeal = () => {
    axios
      .post("http://127.0.0.1:8000/api/users/1/meals", {
        qty: formFields.qty,
        unit: formFields.unit,
        food: formFields.food,
        time: formFields.time,
        date: formFields.date,
        user: 1,
      })
      .then((response) => {
        console.log(response.data);

        const newMealsData = [...mealsData];
        newMealsData.push({
          qty: response.data.qty,
          unit: response.data.unit,
          food: response.data.food,
          time: response.data.time,
          date: response.data.date,
          user: response.data.user,
        });
      })
      .catch((err) => console.log(err));
  };

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
              <TrackMeal
                onQtyChange={handleQtyChange}
                onUnitChange={handleUnitChange}
                onFoodChange={handleFoodChange}
                onTimeChange={handleTimeChange}
                onDateChange={handleDateChange}
                isQtyValid={isQtyValid}
                mealFormFields={formFields}
                submitMeal={addNewMeal}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
