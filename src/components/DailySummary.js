import React from "react";
import "./DailySummary.css";
import { useState, useEffect } from "react";

const DailySummary = (props) => {
  let numOfMealsSubmitted = props.numOfMealsSubmitted;
  let numOfGlucoseSubmitted = props.numOfGlucoseSubmitted;
  let numOfFitnessSubmitted = props.numOfFitnessSubmitted;
  let numOfMoodSubmitted = props.numOfMoodSubmitted;

  return (
    <div>
      <div>
        <h2>Daily Summary</h2>
        {numOfMealsSubmitted > 0 ? (
          <h3>
            ‣You've successfully submitted {numOfMealsSubmitted} meal(s) today!
          </h3>
        ) : null}
        {numOfGlucoseSubmitted > 0 ? (
          <h3>
            ‣You've successfully submitted {numOfGlucoseSubmitted} glucose
            reading(s) today!
          </h3>
        ) : null}
        {numOfFitnessSubmitted > 0 ? (
          <h3>
            ‣You've successfully submitted {numOfFitnessSubmitted} workout(s)
            today!
          </h3>
        ) : null}
        {numOfMoodSubmitted > 0 ? (
          <h3>
            ‣You've successfully submitted {numOfMoodSubmitted} mood tracking(s)
            today!
          </h3>
        ) : null}
      </div>
    </div>
  );
};

export default DailySummary;
