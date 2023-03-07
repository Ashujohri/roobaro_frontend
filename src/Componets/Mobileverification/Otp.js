import { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import "../Roobaroo.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header & Drawer/Header";
import { Divider } from "@mui/material";
import {
  postDataAxios,
  postDataAxiosWithoutToken,
} from "../../Services/fetchServices";
import { useSelector } from "react-redux";

export default function Otp(props) {
  const Navigate = useNavigate();
  const dispatch=useSelector()
 
  const initialvalues= {mobileNumber:''}
  const [mobile,setMobile] = useState('')
  var [inputOtp, setInputOtp] = useState("");
  var [txtOne, setTxtOne] = useState("");
  var [txtTwo, setTxtTwo] = useState("");
  var [txtThree, setTxtThree] = useState("");
  var [txtFour, setTxtFour] = useState("");
  var [inputOtp, setInputOtp] = useState("");
  var [generateOtp, setGenerateOtp] = useState("");

  


  const handleShowmobile = () => {
    Navigate("/mobilenumber");
  };



  const GenerateOtp = async () => {
    setGenerateOtp = parseInt(Math.random() * 8999) + 1000;
    console.log("OTP>>>>>>>>>>>>", setGenerateOtp);
    var result = await postDataAxiosWithoutToken("visitor/sendOTP", {mobile: mobile,otp: setGenerateOtp, });

   

    console.log("result in OTP", result)
    alert(setGenerateOtp)
  
  }



  const verifyOtp=()=>{
     alert(generateOtp)

     if(generateOtp==inputOtp)
     {
      dispatch({type:'ADD_EMPLOYEE',payload:[props.mobile]}) 
      // navigate('/booking')
     }


     else
     {
      alert('noMatched')
     }
  }






  

  const handleTextOneChange = (event) => {
    if (event.target.value.length >= 1) {
       if(!event.target.value.match(/\d{10}/)){
         setTxtOne(event.target.value);
       }
      document.getElementById("t2").focus();
    }
  };
  
  const handleTextTwoChange = (event) => {
    if (event.target.value.length >= 1) {
      setTxtTwo(event.target.value);
      document.getElementById("t3").focus();
    }
  };
  
  const handleTextThreeChange = (event) => {
    if (event.target.value.length >= 1) {
      setTxtThree(event.target.value);
      document.getElementById("t4").focus();
    }
  };
  const handleTextFourChange = (event) => {
    if (event.target.value.length >= 1) {
      setTxtFour(event.target.value);
      setInputOtp(txtOne + txtTwo + txtThree + event.target.value);
      props.onChange(txtOne + txtTwo + txtThree + event.target.value);
    }
  }



 



















  return (
    <>
      <Header />
      <Divider style={{ width: "10%" }} />
      <Grid xs={12} class="headertwo">
        <div className="headertwotext">Add New Visitor</div>
      </Grid>

      <Grid container className="mainContainerotp">
        <div className="containerotp ">
          <Grid item xs={12}>
            <div className="containerheadingtextotp">
              Enter visitor mobile number
            </div>
          </Grid>

          <Grid xs={12}>
            <TextField
              InputProps={{
                name: "InputProps",
                type: "text",
                style: { borderRadius: 13, fontFamily: "Poppins" },
              }}
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              type="text"
            />
          </Grid>

          <Grid item xs={12} style={{ padding: "1%" }}>
            <Button
              // onClick={handleShowmobile}
              onClick={GenerateOtp}
              variant="contained"
              fullWidth
              class="otpbtn "
            >
              Mobile
            </Button>
          </Grid>

          <Grid item xs={12} className="changemobilenumbertext"  onClick={handleShowmobile}>
            change mobile number
          </Grid>
          <Grid item xs={12} className="verifyotptext"
         onClick= {GenerateOtp}>
            Verify otp
          </Grid>

          <Grid item xs={12} sm={12} container spacing={2} class="otpBox">
            <Grid item sm={2} xs={2}>
              <TextField
                id="t1"
                InputProps={{
                  name: "InputProps",
                  style: { borderRadius: 5, width: 57, height: 40 },
                }}
                onChange={handleTextOneChange}

              />
            </Grid>

            <Grid item sm={2} xs={2}>
              <TextField
                id="t2"
                InputProps={{
                  name: "InputProps",
                  style: { borderRadius: 5, width: 57, height: 40 },
                }}
                onChange={handleTextTwoChange}

              />
            </Grid>

            <Grid item sm={2} xs={2}>
              <TextField
                id="t3"
                InputProps={{
                  name: "InputProps",
                  style: { borderRadius: 5, width: 57, height: 40 },
                }}
               onChange={handleTextThreeChange}

              />
            </Grid>

            <Grid item sm={2} xs={2}>
              <TextField
                id="t4"
                InputProps={{
                  name: "InputProps",
                  style: { borderRadius: 5, width: 57, height: 40 },
                }}
                onChange={handleTextFourChange}

              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
            //  onClick={GenerateOtp}
            
             onClick={verifyOtp}
           
           
           
              variant="contained"
              fullWidth
              class="verifybtn"
             
            >
              Verify OTP
            </Button>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
