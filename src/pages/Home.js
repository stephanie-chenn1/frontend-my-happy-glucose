import React from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import HomeHeader from "../components/HomeHeader";
import { useNavigate } from "react-router-dom";
import DailySummary from "../components/DailySummary";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import NavList from "../components/NavList";

const Home = (props) => {
  const navigate = useNavigate();
  let numOfMealsSubmitted = props.numOfMealsSubmitted;
  let numOfGlucoseSubmitted = props.numOfGlucoseSubmitted;
  let numOfFitnessSubmitted = props.numOfFitnessSubmitted;
  let numOfMoodSubmitted = props.numOfMoodSubmitted;

  return (
    <div>
      <NavList />
      <Stack spacing={2} alignItems="center">
        <HomeHeader />
        <button
          className="button"
          onClick={() => {
            navigate("/track-a-meal");
          }}
        >
          Track your meal for carb count
        </button>
        <button
          className="button"
          onClick={() => {
            navigate("/track-glucose");
          }}
        >
          Track your glucose level
        </button>
        <button
          className="button"
          onClick={() => {
            navigate("/track-fitness");
          }}
        >
          Track your fitness
        </button>
        <button className="button">Track your sleep</button>
        <button
          className="button"
          onClick={() => {
            navigate("/track-mood");
          }}
        >
          Track your mood
        </button>
        {numOfMealsSubmitted ||
        numOfGlucoseSubmitted ||
        numOfFitnessSubmitted ||
        numOfMoodSubmitted ? (
          <DailySummary
            numOfMealsSubmitted={numOfMealsSubmitted}
            numOfGlucoseSubmitted={numOfGlucoseSubmitted}
            numOfFitnessSubmitted={numOfFitnessSubmitted}
            numOfMoodSubmitted={numOfMoodSubmitted}
          />
        ) : null}
      </Stack>
    </div>
  );
};

export default Home;
