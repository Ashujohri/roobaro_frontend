import { useState } from "react";
import { Grid, TextField, Button, Divider } from "@mui/material";
import "../Roobaroo.css";
import Header from "../Header & Drawer/Header";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fontSize } from "@mui/system";

export default function MobileNumber(props) {
  const [personName, setPersonName] = useState([]);
    const [mobile, setMobile] = useState("");
     
 const[error,setError]=useState(false)
  var Navigate = useNavigate();
  var dispatch=useDispatch();










   const handleSubmit=(event)=>{
    event.preventDefault()
   
    if(mobile.length==0 || mobile.length>10 ||mobile.length<10)
    {
      setError(true)
    }
    else{
      dispatch({type:'ADD_EMPLOYEE',payload:[props.mobile]}) 
      Navigate("/otp")
    }

      }
  





























  return (
    <>
      <Header />
      <Divider style={{ width: "10%" }} />
      <Grid xs={12} class="headertwo">
        <div class="headertwotext">Add New Visitor</div>
      </Grid>
      <Grid
        container
        className="headerTop"
        spacing={0}
        style={{
          display: "flex",
          justifyContent: "center",
          height: "60vh",
          alignItems: "center",
        }}
      >
        <div className="container">
          <Grid item xs={12}>
            <div className="containerheadingText">
              Enter Visitor Mobile Number
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
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
            />
          </Grid>
          {error && mobile.length<=0?
      <div style={{textAlign:"center",color:'red' ,fontSize:15}}>Enter 10 digit mobilenumber</div>:<></>}
          <Grid item xs={12}>
            <Button 
            // onClick={handleShowmobile}
            onClick={handleSubmit} 


            //   onClick={()=>{
            //   handleSubmit()
            //  handleShowmobile()

            // }}
            variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
