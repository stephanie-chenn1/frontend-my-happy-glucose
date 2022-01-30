import React from "react";
import "./HomeBox.css";
import Summary from "./Summary";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeBox = () => {
  return (
    <div className="text-center">
      <h1>Welcome!</h1>
      <Summary />
      <Button className="button" variant="danger">
        Track your meal for carb count
      </Button>
      <Button className="button" variant="danger">
        Track your glucose level
      </Button>
      <Button className="button" variant="danger">
        Track your fitness
      </Button>
      <Button className="button" variant="danger">
        Track your sleep
      </Button>
      <Button className="button" variant="danger">
        Track your mood
      </Button>
    </div>
  );
};
export default HomeBox;
