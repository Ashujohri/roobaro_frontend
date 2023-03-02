import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Header from "../Header & Drawer/Header";
import MobileVerifyForm from "./MobileVerifyForm";
import { useStyles } from "./MobileVerificationFullPageCss";
export default function MobileVerificationFullPage({ links }) {
  var classes = useStyles();
  return (
    <>
      <Grid container spacing={4} className={classes.background}>
        <Grid item xs={12}>
          <Header links={links} />
        </Grid>
        <Grid item xs={10} sm={4}>
          <MobileVerifyForm />
        </Grid>
      </Grid>
    </>
  );
}
