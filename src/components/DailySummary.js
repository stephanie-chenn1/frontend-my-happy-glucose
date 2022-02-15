import React from "react";
import "./DailySummary.css";
import { Paper } from "@material-ui/core";
import Typography from "@mui/material/Typography";

const DailySummary = (props) => {
  let numOfMealsSubmitted = props.numOfMealsSubmitted;
  let numOfGlucoseSubmitted = props.numOfGlucoseSubmitted;
  let numOfFitnessSubmitted = props.numOfFitnessSubmitted;
  let numOfMoodSubmitted = props.numOfMoodSubmitted;

  const paperStyle = {
    padding: 20,
    height: "30vh",
    width: 800,
    margin: "35px auto",
  };

  return (
    <div>
      <Paper elevation={5} style={paperStyle}>
        <Typography className="title" variant="h4">
          Daily Summary
        </Typography>
        {numOfMealsSubmitted > 0 ? (
          <Typography variant="h6">
            ‣You've successfully submitted {numOfMealsSubmitted} meal(s) today!
          </Typography>
        ) : null}
        {numOfGlucoseSubmitted > 0 ? (
          <Typography variant="h6">
            ‣You've successfully submitted {numOfGlucoseSubmitted} glucose
            reading(s) today!
          </Typography>
        ) : null}
        {numOfFitnessSubmitted > 0 ? (
          <Typography variant="h6">
            ‣You've successfully submitted {numOfFitnessSubmitted} workout(s)
            today!
          </Typography>
        ) : null}
        {numOfMoodSubmitted > 0 ? (
          <Typography variant="h6">
            ‣You've successfully submitted {numOfMoodSubmitted} mood tracking(s)
            today!
          </Typography>
        ) : null}
      </Paper>
    </div>
  );
};

export default DailySummary;
