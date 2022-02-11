import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Box } from "@material-ui/core";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "20px auto",
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
        ></TextField>
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
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
