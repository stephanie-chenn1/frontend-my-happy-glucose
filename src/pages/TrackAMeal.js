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
  // let mealsData = props.mealsData;
  // let setMealsData = props.setMealsData;
  let numOfMealsSubmitted = props.numOfMealsSubmitted;
  let setNumOfMealsSubmitted = props.setNumOfMealsSubmitted;

  // States
  const [formFields, setFormFields] = useState({
    qty: "",
    unit: "",
    food: "",
    time: "00:00",
    date: "2022-01-01",
  });
  const [isQtyValid, setQtyValid] = useState(true);
  const [ErrorStatus, setErrorStatus] = useState(false);

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

        // const newMealsData = [...mealsData];
        // newMealsData.push({
        //   qty: response.data.qty,
        //   unit: response.data.unit,
        //   food: response.data.food,
        //   time: response.data.time,
        //   date: response.data.date,
        //   user: response.data.user,
        //   carb_count: response.data.carb_count,
        //   id: response.data.id,
        // });
        // setMealsData(newMealsData);
        setFormFields({
          qty: "",
          unit: "",
          food: "",
          time: "00:00",
          date: "2022-01-01",
        });
        setNumOfMealsSubmitted(numOfMealsSubmitted + 1);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrorStatus(true);
      });
  };

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
              <h3>Let's track your meals!</h3>
              <div className="input-field">
                {isQtyValid ? (
                  <TextField
                    id="outlined-number"
                    label="Qty"
                    min="1"
                    type="number"
                    placeholder="1"
                    helperText="Please enter the quantity of your meal"
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
                  defaultValue="12:00"
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
                  defaultValue="2022-01-01"
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
    </Box>
  );
};

export default MealTracker;
