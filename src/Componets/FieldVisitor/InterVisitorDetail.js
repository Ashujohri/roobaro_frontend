import { useState } from "react";
import { Grid, Divider, Button, TextField } from "@mui/material";
import Header from "../Header & Drawer/Header";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import "../Roobaroo.css";

export default function FieldVisit(props) {
  const [value, setValue] = useState(dayjs("2022-02-23"));
  const [personName, setPersonName] = useState([]);
  const [location, setLocation] = useState("");

  return (
    <>
      <div>
        <Header />
      </div>
      <Divider style={{ width: "10%" }} />
      <Grid xs={12} class="headertwo">
        <div className="headertwotext">Add New Visitor</div>
      </Grid>

      <div className="maincontainerVisitor">
        <div class="subContainerVisitor">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <div>Enter Visitor Details</div>
            </Grid>

            <Grid item xs={12} sm={1.5}>
              <div>Name:</div>
            </Grid>

            <Grid item xs={12} sm={10.5}>
              <TextField
                InputProps={{
                  name: "InputProps",
                  type: "text",
                  placeholder: "Name",
                  style: { borderRadius: 13, fontFamily: "Poppins" },
                }}
                label="Name"
                fullWidth
                size="small"
                variant="outlined"
                placeholder="email"
                type="text"
              />
            </Grid>
            <Grid item xs={12} sm={1.5}>
              <div>Date Of Birth:</div>
            </Grid>

            <Grid item xs={12} sm={4.2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <DatePicker
                    InputProps={{
                      name: "InputProps",
                      type: "text",
                      placeholder: "Name",
                      style: { borderRadius: 18, fontFamily: "Poppins" },
                    }}
                    disableFuture
                    label={<span>Date of birth</span>}
                    openTo="date"
                    views={["year", "month", "day"]}
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={1.5}>
              <div>Mobile Number:</div>
            </Grid>
            <Grid item xs={12} sm={4.8}>
              <TextField
                InputProps={{
                  name: "InputProps",
                  type: "text",
                  placeholder: "mobiie",
                  style: { borderRadius: 13, fontFamily: "Poppins" },
                }}
                label="Mobile Number"
                fullWidth
                size="small"
                variant="outlined"
                placeholder="email"
                type="text"
              />
            </Grid>

            <Grid item xs={12} sm={1.5}>
              <div>Department:</div>
            </Grid>

            <Grid item xs={12} sm={10.5}>
              <FormControl
                sx={{
                  width: "100%",
                  fontFamily: "Poppins",
                  color: "#000000",
                  fontWeight: "bold",
                }}
                size="small"
              >
                <InputLabel id="demo-multiple-name-label">Select </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={location}
                  sx={{ borderRadius: 3, height: 40 }}
                  //   onChange={handleLocation}
                  input={<OutlinedInput label="Name" />}
                  label="Select Location"
                >
                  <MenuItem value={"Electricity"}>Electricity</MenuItem>
                  <MenuItem value={"Water"}>Water</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={1.5}>
              <div>Location:</div>
            </Grid>

            <Grid item xs={12} sm={10.5}>
              <TextField
                InputProps={{
                  name: "InputProps",
                  type: "text",
                  placeholder: "location",
                  style: { borderRadius: 13, fontFamily: "Poppins" },
                }}
                label="location:"
                fullWidth
                size="small"
                variant="outlined"
                placeholder="email"
                type="text"
              />
            </Grid>

            <Grid xs={12} sm={1.5} />

            <Grid item xs={12} sm={10.5}>
              <Button
                variant="contained"
                fullWidth
                // onClick={handleShowProfile}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
