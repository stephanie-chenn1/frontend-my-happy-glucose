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
import { Paper } from "@material-ui/core";

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
  let navigate = useNavigate();
  let numOfFitnessSubmitted = props.numOfFitnessSubmitted;
  let setNumOfFitnessSubmitted = props.setNumOfFitnessSubmitted;

  let curr = new Date();
  let dateToday = curr.toISOString().substr(0, 10);

  const [formFields, setFormFields] = useState({
    date: dateToday,
    duration: "",
    workout_type: "",
    notes: "",
  });

  const paperStyle = {
    padding: 10,
    height: "75vh",
    width: 500,
    margin: "30px auto",
  };

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
      <Paper elevation={10} style={paperStyle}>
        <div className="meal-form">
          <form>
            <h3>Let's track your fitness!</h3>
            <div className="input-field">
              <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue={dateToday}
                helperText="Please enter the date of your exercise"
                fullWidth
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
                fullWidth
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
                fullWidth
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
                rows={6}
                placeholder="e.g. Went on a brisk walk after eating lunch today! It felt amazing!"
                fullWidth
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
      </Paper>
    </div>
  );
};

export default FitnessTracker;
