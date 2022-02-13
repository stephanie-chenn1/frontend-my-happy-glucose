import React from "react";
import "./TrackAMeal.css";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import NavList from "../components/NavList";

const GlucoseTracker = (props) => {
  let numOfGlucoseSubmitted = props.numOfGlucoseSubmitted;
  let setNumOfGlucoseSubmitted = props.setNumOfGlucoseSubmitted;

  let navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    date: "2022-01-01",
    time: "00:00",
    glucose: "",
    notes: "",
  });

  const [isGlucoseValid, setGlucoseValid] = useState(true);

  const addNewGlucose = () => {
    axios
      .post("http://127.0.0.1:8000/api/users/1/glucose", {
        date: formFields.date,
        time: formFields.time,
        glucose: formFields.glucose,
        notes: formFields.notes,
        user: 1,
      })
      .then((response) => {
        console.log(response.data);

        setFormFields({
          qty: "",
          unit: "",
          food: "",
          time: "00:00",
          date: "2022-01-01",
        });
        setNumOfGlucoseSubmitted(numOfGlucoseSubmitted + 1);
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
          height: 800,
          width: 400,
          alignItems: "center",
          mx: "auto",
        }}
        noValidate
        autoComplete="off"
      >
        <div className="glucose-form">
          <form>
            <h3>Let's track your glucose levels!</h3>
            <div className="input-field">
              <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue="2022-01-01"
                helperText="Please enter the date you monitored your glucose"
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
                id="time"
                label="Time"
                type="time"
                defaultValue="12:00"
                InputLabelProps={{
                  shrink: true,
                }}
                helperText="Please enter the time you monitored your glucose"
                onChange={(e) => {
                  setFormFields({
                    ...formFields,
                    time: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-field">
              {isGlucoseValid ? (
                <TextField
                  id="outlined-number"
                  label="Blood sugar level"
                  min="1"
                  type="number"
                  placeholder="mg/dL"
                  helperText="Please enter your glucose level"
                  onChange={(e) => {
                    if (e.target.value <= 0) {
                      setGlucoseValid(false);
                    } else {
                      setGlucoseValid(true);
                    }

                    setFormFields({
                      ...formFields,
                      glucose: e.target.value,
                    });
                  }}
                />
              ) : (
                <TextField
                  error
                  id="outlined-error-helper-text"
                  label="Error"
                  type="number"
                  helperText="Please enter a valid glucose level value"
                  onChange={(e) => {
                    if (e.target.value <= 0) {
                      setGlucoseValid(false);
                    } else {
                      setGlucoseValid(true);
                    }

                    setFormFields({
                      ...formFields,
                      glucose: e.target.value,
                    });
                  }}
                />
              )}
              <div className="input-field">
                <TextField
                  id="outlined-multiline-static"
                  label="Notes (optional)"
                  multiline
                  rows={10}
                  placeholder="e.g. Woke up in the middle of the night with a low. Felt dizzy for a bit but felt better after taking a glucose tablet."
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
                onClick={addNewGlucose}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default GlucoseTracker;
