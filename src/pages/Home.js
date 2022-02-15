import React from "react";
import "./Home.css";
import HomeHeader from "../components/HomeHeader";
import DailySummary from "../components/DailySummary";
import NavList from "../components/NavList";
import DashboardBox from "../components/DashboardBox";

const Home = (props) => {
  let numOfMealsSubmitted = props.numOfMealsSubmitted;
  let numOfGlucoseSubmitted = props.numOfGlucoseSubmitted;
  let numOfFitnessSubmitted = props.numOfFitnessSubmitted;
  let numOfMoodSubmitted = props.numOfMoodSubmitted;

  let boxes = [
    {
      Title: "Meals",
      Info: "It's important to track your meals to monitor your carb count!",
      Link: "/track-a-meal",
    },
    {
      Title: "Glucose",
      Info: "Monitoring your glucose levels can help reduce symptoms of high and low blood sugar.",
      Link: "/track-glucose",
    },
    {
      Title: "Fitness",
      Info: "Exercise can lower blood glucose levels and counter insulin resistance.",
      Link: "/track-fitness",
    },
    {
      Title: "Mood",
      Info: "Your mood impacts your blood glucose levels. Prioritize self-care!",
      Link: "/track-mood",
    },
  ];
  return (
    <>
      <NavList />
      <div className="header">
        <HomeHeader />
      </div>
      <div className="container">
        {boxes.map((box) => (
          <div className="box">
            <DashboardBox box={box} />
          </div>
        ))}

        {numOfMealsSubmitted ||
        numOfGlucoseSubmitted ||
        numOfFitnessSubmitted ||
        numOfMoodSubmitted ? (
          <div className="summary">
            <DailySummary
              numOfMealsSubmitted={numOfMealsSubmitted}
              numOfGlucoseSubmitted={numOfGlucoseSubmitted}
              numOfFitnessSubmitted={numOfFitnessSubmitted}
              numOfMoodSubmitted={numOfMoodSubmitted}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
