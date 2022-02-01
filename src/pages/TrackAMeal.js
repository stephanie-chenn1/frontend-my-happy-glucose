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

const ariaLabel = { "aria-label": "description" };

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

function TrackMeal() {
  const [unit, setUnit] = React.useState("cup");

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="meal-form">
        <form>
          <h2>Track your meal for today</h2>
          <div className="input-field">
            <label>
              <TextField
                id="outlined-number"
                label="Qty"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                helperText="Please enter the quantity of your meal"
              />
            </label>
          </div>

          <div className="input-field">
            <label>
              <TextField
                id="standard-select-unit"
                select
                label="Unit"
                helperText="Please select a unit"
                value={unit}
                onChange={handleUnitChange}
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
                inputProps={{
                  step: 300, // 5 min
                }}
                sx={{ width: 150 }}
                helperText="Please enter the time of your meal"
              />
            </label>
          </div>

          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </form>
      </div>
    </Box>
  );
}

export default TrackMeal;
