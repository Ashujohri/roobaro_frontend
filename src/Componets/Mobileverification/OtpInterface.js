
import { Grid, TextField, Button } from "@mui/material";
import { margin } from "@mui/system";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./MobileVerifyFormCss";
import { postDataAxios } from "../../Services/fetchServices";
import Swal from "sweetalert2";


export default function OtpInterface(props) {
    console.log("PROPSSSSSSSSSSSSSS",props)
    var classes = useStyles();
    // var Navigate = useNavigate();
  const initialvalues= {mobileNumber:''}
  const[formValues,setFormValue]=useState(initialvalues)
  const [mobile,setMobile] = useState('')
  const[formError,setFormError]=useState({})
  const[isSumbit,setIsSubmit]=useState(false)
  var [inputOtp, setInputOtp] = useState("");
  var [txtOne, setTxtOne] = useState("");
  var [txtTwo, setTxtTwo] = useState("");
  var [txtThree, setTxtThree] = useState("");
  var [txtFour, setTxtFour] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [btnStatus, setBtnStatus] = useState(false);
  var [seconds, setSeconds] = useState(true);
  var [time, setTime] = useState(10);
  var [refresh, setRefresh] = useState(false);
  var [inputOtp, setInputOtp] = useState("");
  var [status, setStatus] = useState(false);
  var [userDetails,setUserDetails]=useState({})
  var interval;


  const fetchUserDetails=async()=>{
 var result=await postDataAxios('visitor/sendOTP',{mobileno:props.mobile})
   setUserDetails(result)

  }
  useEffect(function () {
    myTimer();
    fetchUserDetails()
  }, []);
   


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
  };

   



    const handleTextOneChange = (event) => {
        if (event.target.value.length >= 1) {
          setTxtOne(event.target.value);
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
      };
    
      
    const verifyOtp = () => {
  //  alert(inputOtp + "   " + props.generatedOtp);
  //     if(props.generatedOtp==inputOtp)
  //       {
  //         alert('matched')
  //       }
  //       else{
  //         alert('Notmatched')
  //       }
  //     }
      


      if(props.generatedOtp==inputOtp)
      {Swal.fire({
       icon: 'success',
       title: 'Done...',
       text: 'Matched',
      
     })
     }
      else
      { Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'NotMatched!',
     
     })
     }
     }
      
      
      
    return(<>
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
            }} 
            onChange={handleTextOneChange}
            
            />
          </Grid>
    
          <Grid item sm={2} xs={2} >
            <TextField id="t2" 
            InputProps={{ name: "InputProps", style: { borderRadius: 5, width: 45, }}}
            onChange={handleTextTwoChange} />
          </Grid>
       
          <Grid item sm={2} xs={2} >
            <TextField id="t3" InputProps={{
              name: "InputProps", style: { borderRadius: 5, width: 45, }
            }} 
            onChange={handleTextThreeChange}/>
          </Grid>


          <Grid item sm={2} xs={2} >
            <TextField id="t4" InputProps={{
              name: "InputProps", style: { borderRadius: 5, width: 45, }
            }}
            onChange={handleTextFourChange} />
          </Grid>
      
        </Grid>


        <Grid item xs={12}>
          <Button variant="contained" fullWidth class={classes.btn} onClick={verifyOtp} >
            Verify Otp
          </Button>
        </Grid>
        <Grid xs={12} item>
          <div style={{ fontSize: 10 }}>
            {seconds ? (
              <div style={{textAlign:'center' ,margin:5,color:'#347DFC'}}>Waiting for OTP...{time}</div>
            ) : (
              <div style={{ cursor: "pointer" ,textAlign:'center',margin:5}} onClick={props.GenerateOtp} >
                Resend Otp
              </div>
            )}
          </div>
        </Grid>

        



    </>)
}