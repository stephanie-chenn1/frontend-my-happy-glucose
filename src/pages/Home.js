import React from "react";
import "./Home.css";
import HomeHeader from "../components/HomeHeader";
import { useNavigate } from "react-router-dom";
import DailySummary from "../components/DailySummary";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import NavList from "../components/NavList";
import DashboardBox from "../components/DashboardBox";

const Home = (props) => {
  const navigate = useNavigate();
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
      Info: "Tracking your glucose levels can help reduce symptoms of high and low blood sugar.",
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
      {/* <Stack spacing={2} alignItems="center"> */}
      <div className="header">
        <HomeHeader />
      </div>
      <div className="container">
        {/* <div className="container"> */}
        {boxes.map((box) => (
          <div className="box">
            <DashboardBox box={box} />
          </div>
        ))}
        {/* </div> */}

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
        {/* </Stack> */}
      </div>
    </>
  );
};

export default Home;
