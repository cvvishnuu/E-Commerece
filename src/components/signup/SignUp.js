import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import background from "../../images/Sign-In-background.png";

import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {"Copyright © "}
      theneurate.in
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    firstName: {
      value: "",
      error: false,
      errorMessage: "You must enter your first name",
    },
    lastName: {
      value: "",
      error: false,
      errorMessage: "You must enter your last name",
    },
    email: {
      value: "",
      error: false,
      errorMessage: "You must enter your email",
    },
    phoneNumber: {
      value: "",
      error: false,
      errorMessage: "You must enter your phone number",
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
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
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
              SIGN UP
            </Typography>
            <Box
              component="form"
              noValidate
              onChange={handleChange}
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    value={formValues.firstName.value}
                    id="firstName"
                    label="First Name"
                    autoFocus
                    error={formValues.firstName.error}
                    helperText={
                      formValues.firstName.error &&
                      formValues.firstName.errorMessage
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={formValues.lastName.value}
                    error={formValues.lastName.error}
                    helperText={
                      formValues.lastName.error &&
                      formValues.lastName.errorMessage
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formValues.email.value}
                    error={formValues.email.error}
                    helperText={
                      formValues.email.error && formValues.email.errorMessage
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    required
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]" }}
                    fullWidth
                    id="phoneNumber"
                    label="Phone Number"
                    name="phoneNumber"
                    value={formValues.phoneNumber.value}
                    error={formValues.phoneNumber.error}
                    helperText={
                      formValues.phoneNumber.error &&
                      formValues.phoneNumber.errorMessage
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={formValues.password.value}
                    error={formValues.password.error}
                    helperText={
                      formValues.password.error &&
                      formValues.password.errorMessage
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/signin">Already have an account? Sign in</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignUp;
