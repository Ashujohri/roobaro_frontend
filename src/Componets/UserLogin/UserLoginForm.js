import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useStyles } from "./UserLoginFormCss";
export default function UserLoginForm() {
  var classes = useStyles();
  return (
    <>
      <Grid container spacing={0} className={classes.mainContainer}>
        <Grid item xs={12}>
          <div className={classes.headingText} >
            Login to the Robaroo
          </div>
        </Grid>

        <Grid xs={12}>
          <TextField
            InputProps={{
              name: "InputProps",
              type: "text",
              placeholder: "Email/ Mobile",
              style: { borderRadius: 13, fontFamily: "Poppins" },
            }}
            label="Email/Mobile"
            fullWidth
            size="small"
            margin="normal"
            variant="outlined"
            placeholder="email"
            type="text"
          />
        </Grid>

        <Grid xs={12}>
          <TextField
            InputProps={{
              name: "InputProps",
              type: "password",
              placeholder: "Password",
              style: { borderRadius: 13, fontFamily: "Poppins" },
            }}
            label="Password"
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
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
