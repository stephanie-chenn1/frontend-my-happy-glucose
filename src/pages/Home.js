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

const Home = (props) => {
  const navigate = useNavigate();
  let numOfMealsSubmitted = props.numOfMealsSubmitted;
  let numOfGlucoseSubmitted = props.numOfGlucoseSubmitted;

  return (
    <div>
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
        <button className="button">Track your fitness</button>
        <button className="button">Track your sleep</button>
        <button className="button">Track your mood</button>
        <DailySummary
          numOfMealsSubmitted={numOfMealsSubmitted}
          numOfGlucoseSubmitted={numOfGlucoseSubmitted}
        />
      </Stack>
    </div>
  );
};

export default Home;
