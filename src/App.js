import "./App.css";
import NavList from "./components/NavList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import Glucose from "./pages/Glucose";
import TrackMeal from "./pages/TrackAMeal";

function App() {
  return (
    <div>
      <Router>
        <NavList />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/meals" exact element={<Meals />} />
          <Route path="/glucose" exact element={<Glucose />} />
          <Route path="/track-a-meal" exact element={<TrackMeal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
