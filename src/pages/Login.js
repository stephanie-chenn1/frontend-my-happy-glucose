import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Box } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";

const Login = () => {
  let navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState(true);

  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "100px auto",
  };
  const avatarStyle = { backgroundColor: "pink" };

  const handleLogin = () => {
    axios
      .post("http://127.0.0.1:8000/api/users/1", {
        username: formFields.username,
        password: formFields.password,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.response);
        setLoginStatus(false);
      });
  };

  return (
    <Grid align="center">
      {!loginStatus ? (
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Alert severity="error">
              Your username or password is incorrect. Please try again.
            </Alert>
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              onClick={() => setLoginStatus(true)}
            >
              Back
            </Button>
          </Grid>
        </Paper>
      ) : (
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            onChange={(e) => {
              setFormFields({
                ...formFields,
                username: e.target.value,
              });
            }}
          ></TextField>
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            onChange={(e) => {
              setFormFields({
                ...formFields,
                password: e.target.value,
              });
            }}
          ></TextField>
          <Box mt={2}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              onClick={handleLogin}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      )}
    </Grid>
  );
};

export default Login;
