import React from "react";
import { Grid } from "@mui/material";
import LoginHeader from "../Header & Drawer/LoginHeader";
import LoginForm from "./LoginForm";
import { useStyles } from "./UserLoginFullPageCss";

export default function UserLoginFullPage() {
  var classes = useStyles();
  return (
    <>
      <Grid container spacing={4} className={classes.background}>
        <Grid item xs={12}>
          <LoginHeader />
        </Grid>
        <Grid item xs={10} sm={4}>
          <LoginForm />
        </Grid>
      </Grid>
    </>
  );
}
