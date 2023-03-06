import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ApartmentIcon from '@mui/icons-material/Apartment'; 
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import { Grid, Link } from '@mui/material';
import Header from '../Header & Drawer/Header';
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

export default function Dashboard(props) {

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
    navigate('/NewVisitorOffice')
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="container">
          <Header />
          <Grid item xs={12} sm={12} style={{ width: '100%', backgroundColor: '#fff' }}>
            <Grid item xs={12} sm={10} style={{ padding: '0px 5%' }}>
              <div className="main-heading">Add New Visitor</div>
            </Grid>
          </Grid>
          <div className="box">
            <div className="subentrybox">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <div className="heading">Select Entry Mode</div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <div className="center-column border border-radius-10" onClick={handleClick}>
                    <ApartmentIcon style={{ color: '#434343' }} />
                    <div className="textentry">Office</div>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <div className="center-column border border-radius-10">
                    <SupervisorAccountRoundedIcon style={{ color: '#434343' }} />
                    <div className="textentry">Field</div>
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