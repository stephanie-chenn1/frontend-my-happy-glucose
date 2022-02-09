import React from "react";
import "./DailySummary.css";
import { useState, useEffect } from "react";

const DailySummary = (props) => {
  let numOfMealsSubmitted = props.numOfMealsSubmitted;
  let numOfGlucoseSubmitted = props.numOfGlucoseSubmitted;

  return (
    <div>
      <div>
        <h2>Daily Summary</h2>
        {numOfMealsSubmitted > 0 ? (
          <h3>‣You've submitted {numOfMealsSubmitted} meal(s) today!</h3>
        ) : null}
        {numOfGlucoseSubmitted > 0 ? (
          <h3>
            ‣You've submitted {numOfGlucoseSubmitted} glucose reading(s) today!
          </h3>
        ) : null}
      </div>
    </div>
  );
};

export default DailySummary;
