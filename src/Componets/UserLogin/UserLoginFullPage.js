import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Header from "../Header & Drawer/Header";
import LoginForm from "./LoginForm";
import { useStyles } from "./UserLoginFullPageCss";


export default function UserLoginFullPage({ links }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  var classes = useStyles()
  return (
    <>
      <Grid
        container
        spacing={4}
        className={classes.background}
      >
        <Grid item xs={12}>
          <Header links={links} />
        </Grid>
        <Grid item xs={10} sm={4} >
          <LoginForm />
        </Grid>
      </Grid>
    </>
  );
}
