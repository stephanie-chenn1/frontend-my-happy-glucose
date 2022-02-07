import React from "react";
import "./TrackAMeal.css";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GlucoseTracker = (props) => {

  return (
    <Box
      component="form"
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { m: 1, width: "21ch" },
        border: "2px dashed grey",
        height: 730,
        width: 400,
        alignItems: "center",
        mx: "auto",
      }}
      noValidate
      autoComplete="off"
    >
      <div className="meal-form">
        <form>
          <h3>Let's track your glucose levels!</h3>
          
        </form>
      </div>
    </Box>
  );
};

export default GlucoseTracker;
