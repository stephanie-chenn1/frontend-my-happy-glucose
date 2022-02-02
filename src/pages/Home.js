import React from "react";
import "./Home.css";
import DailySummary from "../components/DailySummary";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome, Stephanie!</h1>
      <DailySummary />
      <div class="btn-group">
        <button
          className="button"
          onClick={() => {
            navigate("/track-a-meal");
          }}
        >
          Track your meal for carb count
        </button>
        <button className="button">Track your glucose level</button>
        <button className="button">Track your fitness</button>
        <button className="button">Track your sleep</button>
        <button className="button">Track your mood</button>
      </div>
    </div>
  );
}

export default Home;
