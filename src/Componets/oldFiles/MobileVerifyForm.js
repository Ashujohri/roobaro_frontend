import { Grid, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./MobileVerifyFormCss";
import OtpInterface from "./OtpInterface";
import {
  postDataAxios,
  postDataAxiosWithoutToken,
} from "../../Services/fetchServices";
export default function MobileVerifyForm(props) {
  var classes = useStyles(); 
  // var Navigate = useNavigate();
  const initialvalues = { mobileNumber: "" };
  const [formValues, setFormValue] = useState(initialvalues);
  const [mobile, setMobile] = useState("");
  const [formError, setFormError] = useState({});
  const [isSumbit, setIsSubmit] = useState(false);
  var [inputOtp, setInputOtp] = useState("");

  const [generatedOtp, setGeneratedOtp] = useState("");
  const [btnStatus, setBtnStatus] = useState(false);
  const [btnMsg, setBtnMsg] = useState("Continue");

  const GenerateOtp = async () => {
    var otp = parseInt(Math.random() * 8999) + 1000;
    console.log("OTP>>>>>>>>>>>>", otp);
    var result = await postDataAxiosWithoutToken("visitor/sendOTP", {
      mobile: mobile,
      otp: otp,
    });
    console.log("result in OTP", result);
    //alert(result.message)

    setBtnStatus(true);
    setBtnMsg("Change Mobile No");
    setGeneratedOtp(otp);
  };

  const MobileDisable = () => {
    if (btnMsg == "Change Mobile No") {
      setBtnStatus(false);
      setMobile("");
    }
  };

  return (
    <>
      <Grid container spacing={1} className={classes.mainContainer}>
        <Grid item xs={12} sm={12}>
          <div className={classes.headingText}>Enter visiter Mobile number</div>
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
            required
            type="text"
            //disabled='false'
            name="mobileNumber"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
            //onFocus={()=>handleError(null,'mobileEmail')}
            //  onChange={handleChange}
          />
        </Grid>

        <p>{formError.mobileNumber}</p>
        <Grid item xs={12} sm={12}>
          <Button
            variant="contained"
            fullWidth
            class={classes.btn}
            onClick={GenerateOtp}
          >
            Continue
          </Button>
        </Grid>

        {btnStatus ? (
          <Grid item xs={12} sm={12}>
            <div className={classes.changeNumber} onClick={MobileDisable}>
              {btnMsg}
            </div>
          </Grid>
        ) : (
          <></>
        )}
        {btnStatus ? (
          <Grid item xs={12} sm={12}>
            <OtpInterface
              GenerateOtp={GenerateOtp}
              generatedOtp={generatedOtp}
            />
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
}
