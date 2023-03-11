import React, { useState ,useEffect} from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import { Button, FormControl, Grid, Link, OutlinedInput } from "@mui/material";
import Header from "../Header & Drawer/Header";
import { postDataAxiosWithoutToken } from "../../Services/fetchServices";
import "../style.css";
const theme = createTheme();

export default function NewVisitorOffice(props) {
  const [OTP, setOTP] = useState("");
  const [status, setStatus] = useState(false);
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState(false);

  var [inputOtp, setInputOtp] = useState("");
  var [generateOtp, setGenerateOtp] = useState("");
  var [seconds, setSeconds] = useState(true);
  var [time, setTime] = useState(10);
  var [refresh, setRefresh] = useState(false);

  var interval;
  const theme = createTheme({
    palette: {
      primary: {
        main: "#347DFC",
      },
    },
  });

  var navigate = useNavigate();

  const handleClick = async () => {
    if (mobile.length == 0 || mobile.length > 10) {
      setError(true);
    } else if (mobile.length == 10) {
      setStatus(true);
      {GenerateOtp()}
      setError(false);
    }
  };


   
  const GenerateOtp = async () => {
  let otp= parseInt(Math.random() * 8999) + 1000;
  setGenerateOtp(otp)
    console.log("OTP>>>>>>>>>>>>", otp);
    alert(otp)
    var result = await postDataAxiosWithoutToken("visitor/sendOTP", {mobile: mobile,otp: otp, });
     console.log("result in OTP", result)
    // alert(setGenerateOtp)
  
  }
  const handleVerifyOTP = async () => {
    
 alert(OTP)
alert(generateOtp + "  "+OTP)

       if(generateOtp==OTP)
       {
        navigate("/AddVisitorForm");
       }
  
  
       else
       {
        alert('noMatched')
       }
   
  };












  
  const handleChangeMobile = async () => {
    setStatus(false);
  };


  
  const myTimer = () => {
    if (seconds) {
      var t = time;
      interval = setInterval(() => {
        if (t >= 1) {
          t = t - 1;

          setTime(t);
        } else {
          clearInterval(interval);
          setSeconds(false);
        }
      }, 1000);
      setRefresh(!refresh);
    }
  }
  useEffect(function () {
    myTimer();
   
  }, [])



 




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
                        value={mobile}
                        onChange={(event) => setMobile(event.target.value)}
                        // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                      />
                    </FormControl>
                  )}
                </Grid>
                {error && mobile.length <= 0 ? (
                  <div
                    style={{ textAlign: "center", color: "red", fontSize: 15 }}
                  >
                    Enter 10 digit mobilenumber
                  </div>
                ) : (
                  <></>
                )}

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
                       
                        onClick={()=>
                          handleVerifyOTP()
                        }
                        fullWidth
                        style={{ borderRadius: 15 }}
                      >
                        Verify OTP
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div className="center">
                        <div className="forgotcolor">
                       


                          {seconds ? (
              <div style={{textAlign:'center' ,margin:5,color:'#347DFC'}}>Waiting for OTP...{time}</div>
            ) : (
              <div style={{ cursor: "pointer" ,textAlign:'center',margin:5}}   onClick={GenerateOtp} >
                Resend Otp
              </div>
            )}
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
