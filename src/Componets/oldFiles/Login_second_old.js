import { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import "../Roobaroo.css";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function Login(props) {
  const [personName, setPersonName] = useState([]);
  const Navigate = useNavigate();

  const handleShowmobile = () => {
    Navigate("/Dashboard");
  };

  const handleShowRecoverPage = () => {
    Navigate("/recoverpassword");
  };

  return (
    <>
      <Grid
        container
        className="headerTop"
        spacing={2}
        style={{ display: "flex", justifyContent: "center", height: "100vh" }}
      >
        <Grid item xs={12}>
          <div style={{ boxShadow: "1px 2px 10px lightgrey" }}>
            <AppBar position="static" className="appbar">
              <Toolbar></Toolbar>
            </AppBar>
          </div>
        </Grid>

        <div className="container">
          <Grid item xs={12}>
            <div className="containerheadingText">Login</div>
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
            />
          </Grid>

          <Grid xs={12}>
            <TextField
              InputProps={{
                name: "InputProps",
                type: "password",
                placeholder: "Password",
                style: { borderRadius: 13, fontFamily: "Poppins" },
              }}
              label="Password"
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              placeholder="email"
              type="text"
            />
          </Grid>

          <Grid item xs={12}>
            <Button onClick={handleShowmobile} variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            className="reset"
            onClick={handleShowRecoverPage}
          >
            <p>
              {" "}
              forgot password ? <a style={{ color: "#347DFC" }}>Reset</a>
            </p>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
