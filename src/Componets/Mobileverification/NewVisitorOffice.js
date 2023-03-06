import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import { Button, FormControl, Grid, Link, OutlinedInput } from "@mui/material";
import Header from "../Header & Drawer/Header";
import "../style.css";

const theme = createTheme();

export default function NewVisitorOffice(props) {
  const [OTP, setOTP] = useState("");
  const [status, setStatus] = useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#347DFC",
      },
    },
  });

  var navigate = useNavigate();

  const handleClick = async () => {
    setStatus(true);
  };
  const handleVerifyOTP = async () => {
    navigate("/AddVisitorForm");
  };
  const handleChangeMobile = async () => {
    setStatus(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="container">
          <Header />
          <Grid
            item
            xs={12}
            sm={12}
            style={{ width: "100%", backgroundColor: "#fff" }}
          >
            <Grid
              item
              xs={12}
              className="center-space-between"
              sm={10}
              style={{ padding: "0px 5%" }}
            >
              <div className="main-heading">Add New Visitor</div>
              <div>
                <div className="defaultcolor">23-Feb-2023</div>
                <div>06 Visits</div>
              </div>
            </Grid>
          </Grid>
          <div className="box">
            <div className="subbox">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <div className="heading">Enter visitor mobile number</div>
                </Grid>
                <Grid item xs={12} sm={12}>
                  {status ? (
                    <FormControl fullWidth size="small" variant="outlined">
                      <OutlinedInput
                        style={{ borderRadius: 15 }}
                        id="outlined-adornment-weight"
                        disabled
                        // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                      />
                    </FormControl>
                  ) : (
                    <FormControl fullWidth size="small" variant="outlined">
                      <OutlinedInput
                        style={{ borderRadius: 15 }}
                        id="outlined-adornment-weight"
                        // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                      />
                    </FormControl>
                  )}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    variant="contained"
                    onClick={handleClick}
                    fullWidth
                    style={{ borderRadius: 15 }}
                  >
                    Continue
                  </Button>
                </Grid>
                {status ? (
                  <>
                    <Grid item xs={12} sm={12}>
                      <div className="right">
                        <div
                          className="primarycolor"
                          style={{ cursor: "pointer" }}
                          onClick={handleChangeMobile}
                        >
                          Change Mobile No
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div className="heading">Verify OTP</div>
                      <div className="defaultcolor">
                        Enter OTP sent to the visitor's whatsapp
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <OTPInput
                        value={OTP}
                        inputStyles={{
                          width: "100%",
                          borderRadius: 10,
                          border: "1px solid #347fca",
                        }}
                        onChange={setOTP}
                        autoFocus
                        OTPLength={4}
                        otpType="number"
                        disabled={false}
                        secure
                      />
                      {/* <FormControl fullWidth size="small" variant="outlined">
                      <OutlinedInput
                        style={{ borderRadius: 15 }}
                        onChange={(event) => {
                          setOTPOne(event.target.value);
                          if (event.target.value.length > 1) {
                            setErrOTPOne(true)
                          }
                          else {
                            setErrOTPOne(false)
                          }
                        }}
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                      />
                    </FormControl> */}
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Button
                        variant="contained"
                        onClick={handleVerifyOTP}
                        fullWidth
                        style={{ borderRadius: 15 }}
                      >
                        Verify OTP
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div className="center">
                        <div className="forgotcolor">
                          <span className="primarycolor">Resend OTP in </span>
                          TImer
                        </div>
                      </div>
                    </Grid>
                  </>
                ) : (
                  <></>
                )}
              </Grid>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
