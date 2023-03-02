import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  TextField,
  Button,
  Select,
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
import ToggleButton from "@mui/material/ToggleButton";
import { useStyles } from "./AddvisitorCssForm";
import Swal from "sweetalert2";
import {
  getDataAxios,
  putDataAndImageAxios,
} from "../../Services/fetchServices";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Camera } from "react-camera-pro";
import moment from "moment/moment";

export default function AddVisitorForm(props) {
  var classes = useStyles();
  const camera = useRef(null);
  const [DOB, setDOB] = useState(dayjs("2022-02-23"));
  const [location, setLocation] = useState("");
  const [userdefault, setUserDefault] = useState("");
  const [names, setNames] = useState([userdefault]);
  const [Department, setDepartment] = useState("");
  const [PhysicallyDisabled, setPhysicallyDisabled] = useState("");
  const [Purpose, setPurpose] = useState("");
  const [Reference, setReference] = useState("");
  const [PrimaryName, setPrimaryName] = useState("");
  const [VisitorType, setVisitorType] = useState("single");
  const [Image, setImage] = useState(null);
  const [DepartmentData, setDepartmentData] = useState([]);
  const [LocationData, setLocationData] = useState([]);

  useEffect(() => {
    fetchDepartment();
    fetchLocation();
  }, []);

  const fetchDepartment = async () => {
    try {
      let result = await getDataAxios(`department/departmentDisplay`);
      if (result.length != 0) {
        setDepartmentData(result.result);
      } else {
        Swal.fire({
          icon: "error",
          title: result.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
      });
    }
  };

  const fetchLocation = async () => {
    try {
      let result = await getDataAxios(`location/locationListView`);
      if (result.length != 0) {
        setLocationData(result.result);
      } else {
        Swal.fire({
          icon: "error",
          title: result.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
      });
    }
  };

  const handleSubmit = async () => {
    try {
      var formData = new FormData();
      formData.append("visitor_name", PrimaryName);
      formData.append("visitor_type", VisitorType);
      formData.append("visitor_mobile", 9898976543);
      formData.append("department_id", Department);
      formData.append("location_id", location);
      formData.append("physically_disabled", PhysicallyDisabled);
      formData.append("purpose", Purpose);
      formData.append("refrence", Reference);
      formData.append("picture", Image);
      formData.append("group_member_name", names.toString());
      formData.append("visitor_dateofbirth", moment(DOB).format("YYYY-MM-DD"));
      formData.append("created_by", 1);
      formData.append(
        "created_date_time",
        moment().format("YYYY-MM-DD HH:mm:ss")
      );
      console.log("formData", JSON.stringify(formData));
      const config = { headers: { "content-type": "multipart/form-data" } };
      let response = await putDataAndImageAxios(`visitor/member/add`, formData, config);
      console.log("response", response);
    } catch (error) {}
  };

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

  const handleVisitor = (e) => {
    setVisitorType(e.target.value);
    setNames([userdefault]);
    setPrimaryName("");
  };

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

        <Grid item xs={5} sm={2.5}>
          <ToggleButtonGroup
            color="primary"
            value={VisitorType}
            exclusive
            onChange={(e) => handleVisitor(e)}
            aria-label="Platform"
          >
            <ToggleButton
              style={{
                borderRadius: 10,
                width: "100%",
                height: 38,
                fontFamily: "Poppins",
                color: "black",
              }}
              color="primary"
              value="single"
            >
              <PersonIcon /> Single
            </ToggleButton>
            <ToggleButton
              style={{
                borderRadius: 10,
                width: "100%",
                height: 38,
                fontFamily: "Poppins",
                color: "black",
              }}
              color="primary"
              value="group"
            >
              <GroupIcon /> Group
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={12} sm={8} />
        {VisitorType === "single" ? (
          <>
            <Grid item xs={12} sm={1.5}>
              <div className={classes.label}>Name (Primary)</div>
            </Grid>
            <Grid item xs={12} sm={10.5}>
              <TextField
                required={true}
                onChange={(e) => setPrimaryName(e.target.value)}
                value={PrimaryName}
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
                type="text"
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={1.5}>
              <div className={classes.label}>Name (Primary)</div>
            </Grid>
            <Grid item xs={12} sm={10.5}>
              <TextField
                onChange={(e) => setPrimaryName(e.target.value)}
                value={PrimaryName}
                InputProps={{
                  name: "InputProps",
                  type: "text",
                  placeholder: "Name",
                  style: { borderRadius: 13, fontFamily: "Poppins" },
                }}
                label="Name"
                required={true}
                fullWidth
                size="small"
                variant="outlined"
                type="text"
              />
            </Grid>{" "}
            {names.map((item, index) => {
              return (
                <>
                  <Grid item xs={12} sm={1.5}>
                    <div className={classes.label}>
                      {index == 0 ? (
                        <> Name (Second Primary)</>
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
                      type="text"
                      required={true}
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
                        {names.length == 9 ? (
                          <>
                            <IconButton disabled color="primary">
                              <AddCircleIcon />{" "}
                            </IconButton>
                          </>
                        ) : (
                          <>
                            <IconButton
                              color="primary"
                              onClick={() => handleAdd()}
                            >
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
          </>
        )}

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
                  placeholder: "DOB",
                  style: { borderRadius: 18, fontFamily: "Poppins" },
                }}
                disableFuture
                label={<span>Date of birth</span>}
                openTo="date"
                value={DOB}
                onChange={(newValue) => {
                  setDOB(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} required={true} />
                )}
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
              value={PhysicallyDisabled}
              onChange={(event) => setPhysicallyDisabled(event.target.value)}
            >
              <FormControlLabel
                sx={{ marginRight: 5 }}
                value="Yes"
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel value="No" control={<Radio />} label="No" />
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
            <InputLabel id="demo-multiple-name-label">
              Select Department
            </InputLabel>
            <Select
              sx={{ borderRadius: 3, height: 40 }}
              labelId="demo-multiple-name-label"
              required={true}
              id="demo-multiple-name"
              value={Department}
              input={<OutlinedInput label="Name" />}
              label="Select Department"
              onChange={(event) => setDepartment(event.target.value)}
            >
              {DepartmentData.map((item, label) => (
                <MenuItem key={item.department_id} value={item.department_id}>
                  {item.department_name}
                </MenuItem>
              ))}
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
            <InputLabel id="demo-multiple-name-label">
              Select Location
            </InputLabel>
            <Select
              sx={{ borderRadius: 3, height: 40 }}
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              required={true}
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              input={<OutlinedInput label="Name" />}
              label="Select location"
            >
              {LocationData.map((item, label) => (
                <MenuItem key={item.location_id} value={item.location_id}>
                  {item.location_name}
                </MenuItem>
              ))}
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
            required={true}
            type="text"
            value={Purpose}
            onChange={(event) => setPurpose(event.target.value)}
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
              placeholder: "Reference",
              style: { borderRadius: 13, fontFamily: "Poppins" },
            }}
            label="Reference"
            fullWidth
            required={true}
            size="small"
            variant="outlined"
            type="text"
            value={Reference}
            onChange={(event) => setReference(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={1.5}>
          <div className={classes.label}>Picture:</div>
        </Grid>

        <Grid item xs={12} sm={4.5}>
          <Camera ref={camera} aspectRatio={16 / 9} facingMode="user" />
          <Button
            style={{ marginTop: "5px" }}
            variant="contained"
            fullWidth
            onClick={() => setImage(camera.current.takePhoto())}
          >
            Take photo
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <img src={Image} alt="Taken photo" width="80%" height="80%" />
        </Grid>

        <Grid xs={12} sm={1.5} />

        <Grid item xs={12} sm={10.5}>
          <Button variant="contained" fullWidth onClick={() => handleSubmit()}>
            Login
          </Button>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </>
  );
}
