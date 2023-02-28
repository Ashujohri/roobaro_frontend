import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Select,
  FormLabel,
  OutlinedInput,
  MenuItem,
  FormControl,
  FormControlLabel,
  InputLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { useStyles } from "./AddvisitorCssForm";
export default function AddVisitorForm() {
  var classes = useStyles();
  const [value, setValue] = useState(dayjs("2022-02-23"));
  const [personName, setPersonName] = useState([]);

  const [location, setLocation] = useState("");

  const handleLocation = async (event) => {
    setLocation(event.target.value);
  };

  const [userdefault, setUserDefault] = useState("");
  const [names, setNames] = useState([userdefault]);

  const handleAdd = () => {
    const data = [...names, []];
    setNames(data);
  };
  const handleChange = (onchangevalue, i) => {
    const inputdata = [...names];
    inputdata[i] = onchangevalue.target.value;
    setNames(inputdata);
  };
  const handleDelete = (i) => {
    const deletename = [...names];
    deletename.splice(i, 1);
    setNames(deletename);
  };
  console.log(names, "data-");

  return (
    <>
      <Grid container spacing={2} className={classes.maincontainer}>
        <Grid item xs={12} sm={12}>
          <div className={classes.headingText}>Enter Visitor Details</div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={1.5}
          style={{
            display: "flex",
            placeItems: "center",
          }}
        >
          <div className={classes.label}>Visitor type:</div>
        </Grid>

        <Grid item xs={5} sm={1}>
          <Button variant="contained" class={classes.typebutton}>
            <PersonIcon /> Single
          </Button>
        </Grid>

        <Grid item xs={5} sm={1}>
          <Button variant="contained" class={classes.typebutton}>
            <GroupIcon /> Group
          </Button>
        </Grid>
        <Grid item xs={12} sm={8.5} />
        {names.map((item, index) => {
          return (
            <>
              <Grid item xs={12} sm={1.5}>
                <div className={classes.label}>
                  {index == 0 ? (
                    <> Name (Primary)</>
                  ) : (
                    <>{index + 1}nd Person Name </>
                  )}
                </div>
              </Grid>
              <Grid item xs={10} sm={10}>
                <TextField
                  onChange={(e) => handleChange(e, index)}
                  value={item}
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
              <Grid
                item
                xs={2}
                sm={0.5}
                sx={{ display: "flex", justifyContent: "right" }}
              >
                {index == 0 ? (
                  <>
                    {names.length == 10 ? (
                      <>
                        <IconButton
                          disabled
                          color="primary"
                          onClick={() => handleAdd()}
                        >
                          <AddCircleIcon />{" "}
                        </IconButton>
                      </>
                    ) : (
                      <>
                        <IconButton color="primary" onClick={() => handleAdd()}>
                          <AddCircleIcon />{" "}
                        </IconButton>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <IconButton
                      color="error"
                      onClick={(e) => handleDelete(index)}
                    >
                      <RemoveCircleOutlineIcon />{" "}
                    </IconButton>
                  </>
                )}
              </Grid>
            </>
          );
        })}

        <Grid item xs={12} sm={1.5}>
          <div className={classes.label}>Date Of Birth:</div>
        </Grid>

        <Grid item xs={12} sm={6}>
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
          <div className={classes.label}>Physically disabled:</div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                sx={{ marginRight: 5 }}
                value="female"
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={1.5}>
          <div className={classes.label}>Department:</div>
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
              onChange={handleLocation}
              input={<OutlinedInput label="Name" />}
              label="Select Location"
            >
              <MenuItem value={"Electricity"}>Electricity</MenuItem>
              <MenuItem value={"Water"}>Water</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={1.5}>
          <div className={classes.label}>Location:</div>
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
            <InputLabel id="demo-multiple-name-label">Select</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={location}
              sx={{ borderRadius: 3, height: 40 }}
              onChange={handleLocation}
              input={<OutlinedInput label="Name" />}
              label="Select Vidhansabha"
            >
              <MenuItem value={"Electricity"}>Vidhansabha 1</MenuItem>
              <MenuItem value={"Water"}>Vidhansabha 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={1.5}>
          <div className={classes.label}>Purpose:</div>
        </Grid>

        <Grid item xs={12} sm={10.5}>
          <TextField
            InputProps={{
              name: "InputProps",
              type: "text",
              placeholder: "Purpose",
              style: { borderRadius: 13, fontFamily: "Poppins" },
            }}
            label="Purpose"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            placeholder="email"
            type="text"
          />
        </Grid>

        <Grid item xs={12} sm={1.5}>
          <div className={classes.label}>Reference:</div>
        </Grid>

        <Grid item xs={12} sm={10.5}>
          <TextField
            InputProps={{
              name: "InputProps",
              type: "text",
              placeholder: " Reference:",
              style: { borderRadius: 13, fontFamily: "Poppins" },
            }}
            label=" Reference:"
            fullWidth
            size="small"
            variant="outlined"
            placeholder="email"
            type="text"
          />
        </Grid>

        <Grid item xs={12} sm={1.5}>
          <div className={classes.label}>Picture:</div>
        </Grid>

        <Grid item xs={5} sm={1}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input size="large" hidden accept="image/*" type="file" />
            <PhotoCamera sx={{ fontSize: 50, padding: 3 }} />
          </IconButton>
        </Grid>

        <Grid item xs={7} sm={9.5}>
          <Button
            variant="contained"
            component="label"
            style={{
              borderRadius: 10,
              fontFamily: "Poppins",
              textTransform: "none",
            }}
          >
            Open Camera
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>

        <Grid xs={12} sm={1.5} />

        <Grid item xs={12} sm={10.5}>
          <Button variant="contained" fullWidth class={classes.submitbtn}>
            Login
          </Button>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </>
  );
}
