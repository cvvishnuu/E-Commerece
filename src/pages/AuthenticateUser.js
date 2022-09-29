import React, { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import background from "../images/Sign-In-background.png";
import MuiLink from "@mui/material/Link";
import { observer } from "mobx-react";
import { StoreContext } from "../StoreContext";

import SignIn from "../components/AuthenticateUser/SignIn";
import { Button } from "@mui/material";
import SignUp from "../components/AuthenticateUser/SignUp";

const theme = createTheme();

const AuthenticateUser = () => {
  const { authStore } = useContext(StoreContext);
  const navRoute = authStore.getNavigatingButton();

  const renderNavigationButton = (route) => (
    <Grid container>
      {route === "signin" ? (
        <>
          <Grid item xs>
            <MuiLink href="#" variant="body2">
              Forgot password?
            </MuiLink>
          </Grid>
          <Grid item>
            <Button onClick={() => authStore.setNavigatingButton("signup")}>
              Don't have an account? Sign Up
            </Button>
          </Grid>
        </>
      ) : (
        <Grid item>
          <Button onClick={() => authStore.setNavigatingButton("signin")}>
            Already have an account? Sign in
          </Button>
        </Grid>
      )}
    </Grid>
  );

  const renderPageContent = (route) => (
    <>
      {route === "signin" ? (
        <SignIn
          route={navRoute}
          renderNavigationButton={renderNavigationButton}
        />
      ) : (
        <SignUp
          route={navRoute}
          renderNavigationButton={renderNavigationButton}
        />
      )}
    </>
  );

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
          {renderPageContent(navRoute)}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default observer(AuthenticateUser);
