import { Grid, TextField, Typography, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function LoginForm() {

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    var navigate = useNavigate()

    const handleSubmit = async () => {
        
    };
    return (
        <>
            <Grid container spacin={2} sx={{ padding: 4, backgroundColor: 'white', borderRadius: 6, boxShadow: '1px 2px 10px lightgrey', }} >
                <Grid item xs={12} sx={{ paddingBottom: 3 }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 20, }}>
                        Login to the Robaroo
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ paddingBottom: 3 }} >
                    <TextField fullWidth
                        InputProps={{
                            name: "InputProps",
                            type: "text",
                            placeholder: 'Email/ Mobile',
                            style: { borderRadius: 13, fontFamily: 'Poppins' }
                        }}
                        label="Email / Mobile"
                        type='text'
                        placeholder='Email / Mobile'
                        id="outlined-size-small"
                        size="small"
                        onChange={(event) => setEmailAddress(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sx={{ paddingBottom: 3 }}>
                    <TextField fullWidth
                        InputProps={{
                            name: "InputProps",
                            type: "password",
                            placeholder: 'Password',
                            style: { borderRadius: 13, fontFamily: 'Poppins' }
                        }}
                        label="Password"
                        type='password'
                        id="outlined-size-small"
                        size="small"
                        placeholder='Password'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} >
                    <Button variant="contained" size="small" fullWidth
                        onClick={() => handleSubmit()}
                        sx={{
                            height: '28pt',
                            borderRadius: '13px',
                            textTransform: 'none',
                            fontFamily: 'Poppins',
                            fontSize: 16,
                            fontWeight: 600
                        }}>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

