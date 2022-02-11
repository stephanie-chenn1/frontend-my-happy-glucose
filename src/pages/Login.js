import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Box } from "@material-ui/core";
import { useState, useEffect } from "react";

const Login = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });

  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "100px auto",
  };
  const avatarStyle = { backgroundColor: "pink" };
  return (
    <Grid align="center">
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
          <Button variant="contained" type="submit" color="primary">
            Sign In
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Login;
