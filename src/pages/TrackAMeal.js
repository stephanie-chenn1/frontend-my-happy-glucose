import React from "react";
import "./TrackAMeal.css";
import { Dropdown } from "react-bootstrap";
import TimePicker from "react-time-picker";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

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

const TrackMeal = (props) => {
  let onUnitChange = props.onUnitChange;
  let onQtyChange = props.onQtyChange;
  let isQtyValid = props.isQtyValid;
  let formFields = props.mealFormFields;
  let onFoodChange = props.onFoodChange;
  let onTimeChange = props.onTimeChange;
  let onDateChange = props.onDateChange;
  let submitMeal = props.submitMeal;
  // const [formFields, setFormFields] = useState({
  //   qty: "",
  //   unit: "",
  //   food: "",
  //   time: "",
  //   date: "",
  // });

  // const [isQtyValid, setQtyValid] = useState(true);

  // const handleUnitChange = (e) => {
  //   setFormFields({
  //     ...formFields,
  //     unit: e.target.value,
  //   });
  // };

  // const handleQtyChange = (e) => {
  //   if (e.target.value <= 0) {
  //     setQtyValid(false);
  //   } else {
  //     setQtyValid(true);
  //   }

  //   setFormFields({
  //     ...formFields,
  //     qty: e.target.value,
  //   });
  // };

  // const handleFoodChange = (e) => {
  //   setFormFields({
  //     ...formFields,
  //     food: e.target.value,
  //   });
  // };

  // const handleTimeChange = (e) => {
  //   console.log(e.target.value);
  //   setFormFields({
  //     ...formFields,
  //     time: e.target.value,
  //   });
  // };

  // const handleDateChange = (e) => {
  //   setFormFields({
  //     ...formFields,
  //     date: e.target.value,
  //   });
  // };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="meal-form">
        <form>
          <h3>Meal tracker</h3>
          <div className="input-field">
            {/* <label> */}
            {isQtyValid ? (
              <TextField
                id="outlined-number"
                label="Qty"
                min="1"
                type="number"
                // InputLabelProps={{
                //   shrink: true,
                // }}
                helperText="Please enter the quantity of your meal"
                onChange={onQtyChange}
                placeholder="1"
                // value={qty}
              />
            ) : (
              <TextField
                error
                id="outlined-error-helper-text"
                label="Error"
                type="number"
                helperText="Please enter a positive value"
                onChange={onQtyChange}
              />
            )}

            {/* </label> */}
          </div>

          <div className="input-field">
            <label>
              <TextField
                id="standard-select-unit"
                select
                label="Unit"
                helperText="Please select a unit"
                value={formFields.unit}
                onChange={onUnitChange}
              >
                {units.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </label>
          </div>

          <div className="input-field">
            <label>
              <TextField
                id="outlined-helperText"
                label="Food"
                // defaultValue="Default Value"
                helperText="Please enter your meal"
                onChange={onFoodChange}
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              <TextField
                id="time"
                label="Time"
                type="time"
                defaultValue="12:00"
                InputLabelProps={{
                  shrink: true,
                }}
                // inputProps={{
                //   step: 300, // 5 min
                // }}
                // sx={{ width: 150 }}
                helperText="Please enter the time of your meal"
                onChange={onTimeChange}
              />
            </label>
          </div>

          <div className="input-field">
            <TextField
              id="date"
              label="Date"
              type="date"
              defaultValue="2022-02-01"
              helperText="Please enter the date of your meal"
              onClick={onDateChange}
              // sx={{ width: 220 }}
              // InputLabelProps={{
              //   shrink: true,
              // }}
            />
          </div>

          <Button variant="contained" color="secondary" onClick={submitMeal}>
            Submit
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default TrackMeal;
