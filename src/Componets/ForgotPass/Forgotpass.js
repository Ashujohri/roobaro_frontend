import React from "react";
import Header from "../Header & Drawer/Header";
import { ThemeProvider } from "styled-components";
import { createTheme} from '@mui/material/styles';
import { Grid,Button } from "@mui/material";
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const theme = createTheme({
    palette: {
      primary: {
        main: '#347DFC',
      },
    },
  });





export default function  Forgotpass(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [newPass, SetNewPass]=useState()
  const [resetPass, SetResetPass]=useState()

    const handleChangePassword=()=>{
       alert('hhhh')
      
  
  
  
      }


  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };


    return(
        <ThemeProvider theme={theme}>
        <div className="container">
          <Header />
          <div className="box">
            <div className="subbox">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <div className="heading">Create new Password</div>  
                </Grid>





                <Grid item xs={12} sm={12}>
                
                <FormControl fullWidth size="small" variant="outlined">
                  {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                  <OutlinedInput
                    id="outlined-adornment-password"
                    style={{ borderRadius: 15 }}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    // label="Password"
                    placeholder="Enter new password"
                    value={newPass}
                    onChange={(event) => SetNewPass(event.target.value)}
                  />
                </FormControl>
                
              </Grid>



              
              <Grid item xs={12} sm={12}>
                
                <FormControl fullWidth size="small" variant="outlined">
                  {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                  <OutlinedInput
                    id="outlined-adornment-password"
                    style={{ borderRadius: 15 }}
                     type={showPassword1 ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword1}
                          onMouseDown={handleMouseDownPassword1}
                          edge="end"
                        >
                          {showPassword1 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    placeholder="Enter new password"
                    value={resetPass}
                    onChange={(event) => SetResetPass(event.target.value)}
                  />
                </FormControl>
                
              </Grid>
                <Grid item xs={6} sm={12}>
                  <Button  onClick={handleChangePassword} variant="contained" fullWidth style={{ borderRadius: 15 }}>Change Password</Button>
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
    )


}
