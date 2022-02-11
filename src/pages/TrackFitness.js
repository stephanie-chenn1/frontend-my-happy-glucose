import React from "react";
import "./TrackAMeal.css";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import NavList from "../components/NavList";

const workoutTypes = [
  {
    value: "Walking",
    label: "Walking",
  },
  {
    value: "Running",
    label: "Running",
  },
  {
    value: "Hiking",
    label: "Hiking",
  },
  {
    value: "Core training",
    label: "Core training",
  },
  {
    value: "Yoga",
    label: "Yoga",
  },
  {
    value: "Cycling",
    label: "Cycling",
  },
  {
    value: "Swimming",
    label: "Swimming",
  },
  {
    value: "Pilates",
    label: "Pilates",
  },
  {
    value: "Kickboxing",
    label: "Kickboxing",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const FitnessTracker = (props) => {
  let numOfFitnessSubmitted = props.numOfFitnessSubmitted;
  let setNumOfFitnessSubmitted = props.setNumOfFitnessSubmitted;

  let navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    date: "2022-01-01",
    duration: "",
    workout_type: "",
    notes: "",
  });

  const addNewFitness = () => {
    axios
      .post("http://127.0.0.1:8000/api/users/1/fitness", {
        date: formFields.date,
        duration: formFields.duration,
        workout_type: formFields.workout_type,
        notes: formFields.notes,
        user: 1,
      })
      .then((response) => {
        console.log(response.data);

        setFormFields({
          date: "2022-01-01",
          duration: "",
          workout_type: "",
          notes: "",
        });
        setNumOfFitnessSubmitted(numOfFitnessSubmitted + 1);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavList />
      <Box
        component="form"
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { m: 1, width: "21ch" },
          border: "2px dashed grey",
          height: 750,
          width: 400,
          alignItems: "center",
          mx: "auto",
        }}
        noValidate
        autoComplete="off"
      >
        <div className="meal-form">
          <form>
            <h3>Let's track your fitness!</h3>
            <div className="input-field">
              <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue="2022-01-01"
                helperText="Please enter the date of your exercise"
                onChange={(e) => {
                  setFormFields({
                    ...formFields,
                    date: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-field">
              <TextField
                id="duration"
                label="Duration"
                type="number"
                helperText="Please enter the length of your exercise"
                onChange={(e) => {
                  setFormFields({
                    ...formFields,
                    duration: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-field">
              <TextField
                id="standard-select-workout"
                select
                label="Workout Type"
                helperText="Please select your workout type"
                value={formFields.workout_type}
                onChange={(e) => {
                  setFormFields({
                    ...formFields,
                    workout_type: e.target.value,
                  });
                }}
              >
                {workoutTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="input-field">
              <TextField
                id="outlined-multiline-static"
                label="Notes (optional)"
                multiline
                rows={8}
                placeholder="e.g. Went on a brisk walk after eating lunch today! It felt amazing!"
                onChange={(e) => {
                  setFormFields({
                    ...formFields,
                    notes: e.target.value,
                  });
                }}
              />
            </div>

            <Button
              variant="contained"
              color="secondary"
              onClick={addNewFitness}
            >
              Submit
            </Button>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default FitnessTracker;
