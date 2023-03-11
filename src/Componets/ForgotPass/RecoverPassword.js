import { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import "../Roobaroo.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header & Drawer/Header";
import { Divider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function RecoverPassword() {
  const [personName, setPersonName] = useState();
  const Navigate = useNavigate();

  const handleShowmobile = () => {
    alert("hi");
  };

  const handleShowCreatePass = () => {
    Navigate("/cretepasword");
  };

  return (
    <>
      <Grid item xs={12}>
        <div style={{ boxShadow: "1px 2px 10px lightgrey" }}>
          <AppBar position="static" className="appbar">
            <Toolbar></Toolbar>
          </AppBar>
        </div>
      </Grid>
      <Divider style={{ width: "10%" }} />

      <Grid container className="mainContainerRecover">
        <div className="containerrecover">
          <Grid item xs={12}>
            <div className="containerheadingtextrecover">
              Recover your password
            </div>
          </Grid>

          <Grid xs={12}>
            <TextField
              InputProps={{
                name: "InputProps",
                type: "text",
                placeholder: "Enter New Pasword",
                style: { borderRadius: 13, fontFamily: "Poppins" },
              }}
              label="Enter new pasword"
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              placeholder="email"
              type="text"
            />
          </Grid>







          

          <Grid item xs={12} style={{ padding: "1%" }}>
            <Button
              onClick={handleShowmobile}
              variant="contained"
              fullWidth
              class="recoverBtn"
            >
              Send OTP
            </Button>
          </Grid>

          <Grid item xs={12} sm={12} container spacing={2} class="otpBox">
            <Grid item sm={2} xs={2}>
              <TextField
                id="t1"
                InputProps={{
                  name: "InputProps",
                  style: { borderRadius: 5, width: 57, height: 40 },
                }}
              />
            </Grid>

            <Grid item sm={2} xs={2}>
              <TextField
                id="t1"
                InputProps={{
                  name: "InputProps",
                  style: { borderRadius: 5, width: 57, height: 40 },
                }}
              />
            </Grid>

            <Grid item sm={2} xs={2}>
              <TextField
                id="t1"
                InputProps={{
                  name: "InputProps",
                  style: { borderRadius: 5, width: 57, height: 40 },
                }}
              />
            </Grid>

            <Grid item sm={2} xs={2}>
              <TextField
                id="t1"
                InputProps={{
                  name: "InputProps",
                  style: { borderRadius: 5, width: 57, height: 40 },
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={handleShowCreatePass}
              variant="contained"
              fullWidth
              class="recoverBtn"
            >
              Verify OTP
            </Button>
          </Grid>

          <Grid item xs={12} className="cancelrtextrecover">
            Cancel
          </Grid>
        </div>
      </Grid>
    </>
  );
}
