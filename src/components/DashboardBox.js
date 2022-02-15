import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "./DashboardBox.css";

const DashboardBox = (props) => {
  let box = props.box;

  const navigate = useNavigate();

  return (
    <div>
      <Card className="card">
        <CardContent>
          <Typography
            className="title"
            variant="h4"
            color="text.secondary"
            gutterBottom
          >
            {box.Title}
          </Typography>
          <Typography variant="h6" component="div">
            {box.Info}
          </Typography>
        </CardContent>
        <CardActions>
          <button
            className="button"
            size="small"
            onClick={() => {
              console.log(box.Link);
              navigate(box.Link);
            }}
          >
            Click to track
          </button>
        </CardActions>
      </Card>
    </div>
  );
};

export default DashboardBox;
