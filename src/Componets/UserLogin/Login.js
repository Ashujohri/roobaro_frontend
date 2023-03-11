import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Grid, Link } from '@mui/material';
import { purple } from '@mui/material/colors';
import Header from '../Header & Drawer/Header';
import ResetPass from '../ForgotPass/ResetPass';
import '../style.css'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://the7shades.in/">
        the7shades
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login(props) {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#347DFC',
      },
    },
  });

  var navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const handleClick = async () => {
    navigate('/Dashboard')
  };


  const handlePassword = async () => {
    navigate('/ResetPass')
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="container">
          <Header />
          <div className="box">
            <div className="subbox">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <div className="heading">Login to the Roobaroo</div>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth size="small" variant="outlined">
                    <OutlinedInput
                      style={{ borderRadius: 15 }}
                      id="outlined-adornment-weight"
                      // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                    />
                  </FormControl>
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
                    />
                  </FormControl>
                  
                </Grid>
                <Grid item xs={6} sm={12}>
                  <Button variant="contained" onClick={handleClick} fullWidth style={{ borderRadius: 15 }}>Login</Button>
                </Grid>
                <Grid item xs={6} sm={12}>
                  <div className="center">
                    <div className='forgotcolor' onClick={handlePassword}>Forget Password?<span className="primarycolor ">Reset</span></div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}