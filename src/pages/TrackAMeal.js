import React from "react";
import "./TrackAMeal.css";
import { Dropdown } from "react-bootstrap";
import TimePicker from "react-time-picker";
import { useState } from "react";

function TrackMeal() {
  const [time, setTimeField] = useState("00:00:00");

  const handleTimeChange = (e) => {
    setTimeField(e.target.value);
  };

  return (
    <div>
      <form className="form">
        <h1 className="title">Track your meal</h1>
        <div className="form-inputs">
          Quantity:
          <label htmlFor="quantity" className="form-label">
            <input
              type="text"
              name="quantity"
              className="form-input"
              placeholder="Enter a numeric value"
            />
          </label>
        </div>
        <div className="form-inputs">
          <Dropdown>
            Unit:
            <Dropdown.Toggle variant="secondary">Select a unit</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>cup</Dropdown.Item>
              <Dropdown.Item>g</Dropdown.Item>
              <Dropdown.Item>oz</Dropdown.Item>
              <Dropdown.Item>serving</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="form-inputs">
          Food:
          <label htmlFor="food" className="form-label">
            <input
              type="text"
              name="food"
              className="form-input"
              placeholder="e.g. oatmeal, apple, etc"
            />
          </label>
        </div>

        <div className="form-inputs">
          Time:
          <TimePicker
            showSeconds
            value={time}
            onChange={handleTimeChange}
            className="time-field"
          />
        </div>

        <div className="form-inputs">
          <button className="form-input-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default TrackMeal;
