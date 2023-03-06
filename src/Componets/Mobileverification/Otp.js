import { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import "../Roobaroo.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header & Drawer/Header";
import { Divider } from "@mui/material";

export default function Otp(props) {
  const Navigate = useNavigate();
  const [personName, setPersonName] = useState();

  const handleShowmobile = () => {
    Navigate("/mobilenumber");
  };

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
              onClick={handleShowmobile}
              variant="contained"
              fullWidth
              class="otpbtn "
            >
              Mobile
            </Button>
          </Grid>

          <Grid item xs={12} className="changemobilenumbertext">
            change mobile number
          </Grid>
          <Grid item xs={12} className="verifyotptext">
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
              onClick={handleShowmobile}
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
