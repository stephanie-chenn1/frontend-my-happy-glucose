import React from "react";
import "./TrackGlucose.css";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import NavList from "../components/NavList";
import { Paper } from "@material-ui/core";

const GlucoseTracker = (props) => {
  let navigate = useNavigate();
  let numOfGlucoseSubmitted = props.numOfGlucoseSubmitted;
  let setNumOfGlucoseSubmitted = props.setNumOfGlucoseSubmitted;

  let curr = new Date();
  let dateToday = curr.toISOString().substr(0, 10);

  const [isGlucoseValid, setGlucoseValid] = useState(true);
  const [formFields, setFormFields] = useState({
    date: dateToday,
    time: "",
    glucose: "",
    notes: "",
  });

  const paperStyle = {
    padding: 10,
    height: "75vh",
    width: 500,
    margin: "30px auto",
  };

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
          date: dateToday,
          time: "",
          glucose: "",
          notes: "",
        });
        setNumOfGlucoseSubmitted(numOfGlucoseSubmitted + 1);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavList />
      <Paper elevation={10} style={paperStyle}>
        <div className="glucose-form">
          <form>
            <h3>Let's track your glucose levels!</h3>
            <div className="input-field">
              <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue={dateToday}
                helperText="Please enter the date you monitored your glucose"
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
                id="time"
                label="Time"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                helperText="Please enter the time you monitored your glucose"
                fullWidth
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
                  fullWidth
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
                  rows={6}
                  placeholder="e.g. Woke up in the middle of the night with a low. Felt dizzy for a bit but felt better after taking a glucose tablet."
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
                onClick={addNewGlucose}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default GlucoseTracker;
