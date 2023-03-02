import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./MobileVerifyFormCss";

export default function MobileVerifyForm() {
  var classes = useStyles();
  var Navigate = useNavigate();

  return (
    <>
      <Grid
        container
        spacing={1}
        className={classes.mainContainer}>
        <Grid item xs={12} sm={12}>
          <div
            className={classes.headingText}>
            Enter visiter Mobile number
          </div>
        </Grid>

        <Grid item xs={12} sm={12}>
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

        <Grid item xs={12} sm={12}>
          <Button variant="contained" fullWidth class={classes.btn}>
            Continue
          </Button>
        </Grid>

        <Grid item xs={12} sm={12}>
          <div
            className={classes.changeNumber}>
            Change mobile number
          </div>
        </Grid>

        <Grid item xs={12} sm={12}>
          <div
            className={classes.verify}>
            Verify OTP
          </div>
        </Grid>

        <Grid item xs={12} sm={12}>
          <div
            className={classes.enterOtpVisitor}>
            Enter OTP sent of the visitor's Mobile Number
          </div>
        </Grid>

        <Grid
          sm={12}
          xs={12}
          spacing={2.5}
          container
          className={classes.otpBox}>
          <Grid item sm={2} xs={2} >
            <TextField id="t1" InputProps={{
              name: "InputProps",
              style: { borderRadius: 5, width: 45, }
            }} />
          </Grid>

          <Grid item sm={2} xs={2} >
            <TextField id="t1" InputProps={{
              name: "InputProps", style: { borderRadius: 5, width: 45, }
            }} />
          </Grid>

          <Grid item sm={2} xs={2} >
            <TextField id="t1" InputProps={{
              name: "InputProps", style: { borderRadius: 5, width: 45, }
            }} />
          </Grid>


          <Grid item sm={2} xs={2} >
            <TextField id="t1" InputProps={{
              name: "InputProps", style: { borderRadius: 5, width: 45, }
            }} />
          </Grid>


        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" fullWidth class={classes.btn}>
            Verify Otp
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
