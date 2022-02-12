import React from "react";
import "./TrackAMeal.css";
import { Dropdown } from "react-bootstrap";
import TimePicker from "react-time-picker";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
import NavList from "../components/NavList";
import { Paper } from "@material-ui/core";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";

const units = [
  {
    value: "cup",
    label: "cup(s)",
  },
  {
    value: "gram",
    label: "g",
  },
  {
    value: "ounce",
    label: "oz",
  },
  {
    value: "serving",
    label: "serving(s)",
  },
];

const MealTracker = (props) => {
  let navigate = useNavigate();

  let numOfMealsSubmitted = props.numOfMealsSubmitted;
  let setNumOfMealsSubmitted = props.setNumOfMealsSubmitted;

  let curr = new Date();
  let dateToday = curr.toISOString().substr(0, 10);

  // States
  const [formFields, setFormFields] = useState({
    qty: "",
    unit: "",
    food: "",
    time: "",
    date: dateToday,
  });
  const [isQtyValid, setQtyValid] = useState(true);
  const [ErrorStatus, setErrorStatus] = useState(false);

  const paperStyle = {
    padding: 20,
    height: "65vh",
    width: 500,
    margin: "70px auto",
  };

  const addNewMeal = () => {
    axios
      .post("http://127.0.0.1:8000/api/users/1/meals", {
        qty: formFields.qty,
        unit: formFields.unit,
        food: formFields.food,
        time: formFields.time,
        date: formFields.date,
        user: 1,
      })
      .then((response) => {
        console.log(response.data);
        setFormFields({
          qty: "",
          unit: "",
          food: "",
          time: "",
          date: dateToday,
        });
        setNumOfMealsSubmitted(numOfMealsSubmitted + 1);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setFormFields({
          qty: "",
          unit: "",
          food: "",
          time: "",
          date: dateToday,
        });
        setErrorStatus(true);
      });
  };
  return (
    <div>
      <NavList />
      <Paper elevation={10} style={paperStyle}>
        <div className="meal-form">
          <form>
            {ErrorStatus ? (
              <div>
                <Alert severity="error">
                  The food you entered is not in the database. Please try again.
                </Alert>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setErrorStatus(false)}
                >
                  Back
                </Button>
              </div>
            ) : (
              <div>
                <h3>
                  Let's track your meals! <DinnerDiningIcon />
                </h3>
                <div className="input-field">
                  {isQtyValid ? (
                    <TextField
                      id="outlined-number"
                      label="Qty"
                      min="1"
                      type="number"
                      placeholder="1"
                      helperText="Please enter the quantity of your meal"
                      fullWidth
                      onChange={(e) => {
                        if (e.target.value <= 0) {
                          setQtyValid(false);
                        } else {
                          setQtyValid(true);
                        }
                        setFormFields({
                          ...formFields,
                          qty: e.target.value,
                        });
                      }}
                    />
                  ) : (
                    <TextField
                      error
                      id="outlined-error-helper-text"
                      label="Error"
                      type="number"
                      helperText="Please enter a positive value"
                      fullWidth
                      onChange={(e) => {
                        if (e.target.value <= 0) {
                          setQtyValid(false);
                        } else {
                          setQtyValid(true);
                        }
                        setFormFields({
                          ...formFields,
                          qty: e.target.value,
                        });
                      }}
                    />
                  )}
                </div>
                <div className="input-field">
                  <TextField
                    id="standard-select-unit"
                    select
                    label="Unit"
                    helperText="Please select a unit"
                    fullWidth
                    value={formFields.unit}
                    onChange={(e) => {
                      setFormFields({
                        ...formFields,
                        unit: e.target.value,
                      });
                    }}
                  >
                    {units.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className="input-field">
                  <TextField
                    id="outlined-helperText"
                    label="Food"
                    helperText="Please enter your meal"
                    fullWidth
                    onChange={(e) => {
                      setFormFields({
                        ...formFields,
                        food: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-field">
                  <TextField
                    id="time"
                    label="Time"
                    type="time"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    helperText="Please enter the time of your meal"
                    onChange={(e) => {
                      setFormFields({
                        ...formFields,
                        time: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-field">
                  <TextField
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue={dateToday}
                    fullWidth
                    helperText="Please enter the date of your meal"
                    onChange={(e) => {
                      setFormFields({
                        ...formFields,
                        date: e.target.value,
                      });
                    }}
                  />
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={addNewMeal}
                >
                  Submit
                </Button>
              </div>
            )}
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default MealTracker;
