import { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import "../Roobaroo.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header & Drawer/Header";
import { Divider } from "@mui/material";

export default function CreatePassword() {
  const [personName, setPersonName] = useState([]);
  const Navigate = useNavigate();

  const handleShowmobile = () => {
    Navigate("/login");
  };

  return (
    <>
      <Header />
      <Divider style={{ width: "10%" }} />

      <Grid container spacing={2} className="mainContainerCreatePassword">
        <div className="containerCreatepassword ">
          <Grid item xs={12}>
            <div className="containerheadingTextCreatepassword ">
              Create New Pasword
            </div>
          </Grid>

          <Grid xs={12}>
            <TextField
              InputProps={{
                name: "InputProps",
                type: "password",
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

          <Grid xs={12}>
            <TextField
              InputProps={{
                name: "InputProps",
                type: "password",
                placeholder: "Enter Confirm password",
                style: { borderRadius: 13, fontFamily: "Poppins" },
              }}
              label="Enter Confirm password"
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
              Change password
            </Button>
          </Grid>

          <Grid item xs={12} className="canceltext">
            Cancel
          </Grid>
        </div>
      </Grid>
    </>
  );
}
