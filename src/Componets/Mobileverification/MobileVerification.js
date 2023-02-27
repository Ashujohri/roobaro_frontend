import { useMediaQuery, useTheme, Grid, TextField, Button } from "@mui/material";
import React from "react";
import { useStyles } from "./MobileVerificationCss";
export default function MobileVerification() {
  var classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid container spacing={0} className={classes.mainContainer}>
        <Grid item xs={12} container>
          <div className={classes.headingText}>Enter Mobile number</div>
        </Grid>

        <Grid item xs={12} container>
          <TextField
            InputProps={{
              name: "InputProps",
              type: "text",
              placeholder: "Mobile Number",
              style: { borderRadius: 13, fontFamily: "Poppins" },
            }}
            label="Mobile Number"
            fullWidth
            size="small"
            margin="normal"
            variant="outlined"
            placeholder="email"
            type="text"
          />
        </Grid>
        <Grid item xs={12} container>
          <Button variant="contained" fullWidth class={classes.btn}>
            Continue
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
