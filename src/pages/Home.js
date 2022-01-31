import React from "react";
import "./Home.css";
import Summary from "../components/DailySummary";

function Home() {
  return (
    <div className="home">
      <h1>Welcome, Stephanie!</h1>
      <Summary />
      <div class="btn-group">
        <button className="button">Track your meal for carb count</button>
        <button className="button">Track your glucose level</button>
        <button className="button">Track your fitness</button>
        <button className="button">Track your sleep</button>
        <button className="button">Track your mood</button>
      </div>
    </div>
  );
}

export default Home;
