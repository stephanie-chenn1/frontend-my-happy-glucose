import React from "react";
import "./DailySummary.css";
import { useState, useEffect } from "react";

const DailySummary = (props) => {
  let numOfMealsSubmitted = props.numOfMealsSubmitted;
  let setNumOfMealsSubmitted = props.setNumOfMealsSubmitted;

  return (
    <div>
      {numOfMealsSubmitted > 0 ? (
        <div>
          <h2>Daily Summary</h2>
          <h3>‣You've submitted {numOfMealsSubmitted} meal(s) today!</h3>
        </div>
      ) : null}
    </div>
  );
};

export default DailySummary;
