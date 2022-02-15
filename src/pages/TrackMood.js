import React from "react";
import "./TrackMood.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavList from "../components/NavList";
import { Paper } from "@material-ui/core";
import { Rating } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Typography from "@material-ui/core/Typography";

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon className="icon" />,
    label: "Very unhappy",
  },
  2: {
    icon: <SentimentDissatisfiedIcon className="icon" />,
    label: "Unhappy",
  },
  3: {
    icon: <SentimentSatisfiedIcon className="icon" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon className="icon" />,
    label: "Happy",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon className="icon" />,
    label: "Very happy",
  },
};

const MoodTracker = (props) => {
  let navigate = useNavigate();

  let numOfMoodSubmitted = props.numOfMoodSubmitted;
  let setNumOfMoodSubmitted = props.setNumOfMoodSubmitted;

  let curr = new Date();
  let dateToday = curr.toISOString().substr(0, 10);

  // States
  const [formFields, setFormFields] = useState({
    mood: "",
    time: "",
    date: dateToday,
  });

  const paperStyle = {
    padding: 20,
    height: "65vh",
    width: 500,
    margin: "70px auto",
  };

  const IconContainer = (props) => {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  };

  const addNewMood = () => {
    axios
      .post("http://127.0.0.1:8000/api/users/1/mood", {
        mood: formFields.mood,
        time: formFields.time,
        date: formFields.date,
        user: 1,
      })
      .then((response) => {
        console.log(response.data);
        console.log(numOfMoodSubmitted);
        setNumOfMoodSubmitted(numOfMoodSubmitted + 1);
        setFormFields({
          mood: "",
          time: "",
          date: dateToday,
        });
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setFormFields({
          mood: "",
          time: "",
          date: dateToday,
        });
      });
  };

  return (
    <div>
      <NavList />
      <Paper elevation={10} style={paperStyle}>
        <div className="mood-form">
          <form>
            <Typography variant="h4">Let's track your mood!</Typography>
            <div className="input-field">
              <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue={dateToday}
                fullWidth
                helperText="Please enter the date you'd like to track your mood for"
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
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                helperText="Please enter the time you'd like to track your mood for"
                onChange={(e) => {
                  setFormFields({
                    ...formFields,
                    time: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-field">
              <Typography variant="h6">Please select your mood</Typography>
              <Rating
                name="rating"
                size="large"
                IconContainerComponent={IconContainer}
                highlightSelectedOnly
                onClick={(e) => {
                  setFormFields({
                    ...formFields,
                    mood: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-field">
              <Button
                variant="contained"
                color="secondary"
                onClick={addNewMood}
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

export default MoodTracker;
