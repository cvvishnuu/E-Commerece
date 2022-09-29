import React, { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import Copyright from "./Copyright";

const SignIn = ({ route, renderNavigationButton }) => {
  const [formValues, setFormValues] = useState({
    email: {
      value: "",
      error: false,
      errorMessage: "You must enter your email",
    },
    password: {
      value: "",
      error: false,
      errorMessage: "You must enter your password",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if (currentValue === "") {
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: true,
          },
        };
      }
    }
    if (formValues.email.value && formValues.password.value) {
      // Call API here
      console.log("filled");
    }
    setFormValues(newFormValues);
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Avatar
        alt="Remy Sharp"
        src={require("../../images/Shoe-logo.png")}
        sx={{ width: 100, height: 100 }}
      />
      <Typography component="h1" variant="h5" mt={2}>
        SIGN IN
      </Typography>
      <Box
        component="form"
        noValidate
        onChange={handleChange}
        onSubmit={handleSubmit}
        sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          value={formValues.email.value}
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          error={formValues.email.error}
          helperText={formValues.email.error && formValues.email.errorMessage}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formValues.password.value}
          error={formValues.password.error}
          helperText={
            formValues.password.error && formValues.password.errorMessage
          }
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          Sign In
        </Button>
        {renderNavigationButton(route)}
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </Box>
  );
};

export default SignIn;
