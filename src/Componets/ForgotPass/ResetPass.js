import React from "react";
import Header from "../Header & Drawer/Header";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material/styles";
import { Grid, Button } from "@mui/material";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useNavigate } from "react-router-dom";
import { postDataAxiosWithoutToken } from "../../Services/fetchServices";
import ForgotPass from "./Forgotpass";

const theme = createTheme({
  palette: {
    primary: {
      main: "#347DFC",
    },
  },
});

export default function ResetPass(props) {
  var navigate = useNavigate();
  const [OTP, setOTP] = useState("");

  const [generateOtp, setGenerateOtp] = useState("");
  const [mobile, setMobile] = useState("");
  const [isDisbled, setIsDisabled] = useState(false);

  const GenerateOtp = async () => {
    let otp = parseInt(Math.random() * 8999) + 1000;
    setGenerateOtp(otp);
    console.log("OTP>>>>>>>>>>>>", otp);
    alert(otp);
    var result = await postDataAxiosWithoutToken("visitor/sendOTP", {
      mobile: mobile,
      otp: otp,
    });
    console.log("result in OTP", result);

    // alert(setGenerateOtp)
  };

  const handleVerifyOTP = async () => {
    alert(OTP);
    alert(generateOtp + "  " + OTP);

    if (generateOtp == OTP) {
      navigate("/Forgotpass");
    } else {
      alert("noMatched");
    }
  };

  const handleNumber = (txt) => {
    setMobile(txt);
    setIsDisabled(true)
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Header />
        <div className="box">
          <div className="subbox">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <div className="heading"> Recover your password</div>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth size="small" variant="outlined">
                    {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                    <OutlinedInput
                      id="outlined-adornment-password"
                      style={{ borderRadius: 15 }}
                      value={mobile}
                      onChange={(e) => handleNumber(e.target.value)}
                      // label="Enter Password"
                      placeholder="Enter registred mobile number"
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid item xs={6} sm={12}>
                <Button
                  disabled={isDisbled ? true : false}
                  onClick={GenerateOtp}
                  variant="Contained"
                  fullWidth
                  style={{ borderRadius: 15, background: isDisbled? "#347DFC":"#E3E3E3" }}
                >
                  Send OTP
                </Button>
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
              </Grid>

              <Grid item xs={6} sm={12}>
                <Button
                  onClick={handleVerifyOTP}
                  variant="Contained"
                  disabled={isDisbled?false:true}
                  fullWidth
                  style={{ borderRadius: 15, background: isDisbled? "#347DFC":"#E3E3E3" }}
                >
                  Verify OTP
                </Button>
              </Grid>

              <Grid item xs={6} sm={12}>
                <div className="center">
                  <div className="primarycolor ">Cancel</div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
