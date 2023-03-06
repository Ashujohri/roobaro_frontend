import { useState } from "react";
import { Grid, TextField, Button, Divider } from "@mui/material";
import "../Roobaroo.css";
import Header from "../Header & Drawer/Header";
import { useNavigate } from "react-router-dom";

export default function MobileNumber(props) {
  const [personName, setPersonName] = useState([]);
  var Navigate = useNavigate();

  const handleShowmobile = () => {
    Navigate("/OTP");
  };

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
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleShowmobile} variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
