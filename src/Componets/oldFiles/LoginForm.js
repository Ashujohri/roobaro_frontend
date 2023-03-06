import { Grid, TextField, Typography, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { postDataAxiosWithoutToken } from "../../Services/fetchServices";

export default function LoginForm() {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (emailAddress.includes("@" && ".com") == true) {
        let body = {
          admin_email: emailAddress,
          password: password,
        };
        let loginResult = await postDataAxiosWithoutToken(
          `auth/login/signin`,
          body
        );
        if (loginResult.status === true && loginResult.data.length != 0) {
          localStorage.setItem("adminInfo", JSON.stringify(loginResult.data));
          localStorage.setItem("token", JSON.stringify(loginResult.token));
          navigate("/MobileVerify", { replace: true });
        } else {
          Swal.fire({
            icon: "error",
            title:
              loginResult.response != undefined
                ? loginResult.response.data.data
                : loginResult.message,
          });
        }
      } else {
        setEmailAddress("");
        Swal.fire({
          icon: "error",
          title: "Enter valid Email",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
      });
    }
  };
  return (
    <Grid
      container
      spacin={2}
      sx={{
        padding: 4,
        backgroundColor: "white",
        borderRadius: 6,
        boxShadow: "1px 2px 10px lightgrey",
      }}
    >
      <Grid item xs={12} sx={{ paddingBottom: 3 }}>
        <Typography
          sx={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 20 }}
        >
          Login to the Robaroo
        </Typography>
      </Grid>
      <form onSubmit={handleLogin}>
        <Grid item xs={12} sx={{ paddingBottom: 3 }}>
          <TextField
            fullWidth
            required={true}
            InputProps={{
              name: "InputProps",
              type: "text",
              placeholder: "Email",
              style: { borderRadius: 13, fontFamily: "Poppins" },
            }}
            label="Email"
            type="text"
            placeholder="Email"
            id="outlined-size-small"
            size="small"
            onChange={(event) => setEmailAddress(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sx={{ paddingBottom: 3 }}>
          <TextField
            fullWidth
            required={true}
            InputProps={{
              name: "InputProps",
              type: "password",
              placeholder: "Password",
              style: { borderRadius: 13, fontFamily: "Poppins" },
            }}
            label="Password"
            type="password"
            id="outlined-size-small"
            size="small"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            size="small"
            fullWidth
            type="submit"
            sx={{
              height: "28pt",
              borderRadius: "13px",
              textTransform: "none",
              fontFamily: "Poppins",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Login
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}
