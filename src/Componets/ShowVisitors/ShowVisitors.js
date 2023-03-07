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
  InputAdornment,
} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FilterIcon from "@mui/icons-material/FilterAlt";
import dayjs from "dayjs";
import SearchIcon from "@mui/icons-material/Search";
// import { useStyles } from "./AddvisitorCssForm";
import Swal from "sweetalert2";
import '../style.css'
// import {
//   getDataAxios,
//   putDataAndImageAxios,
// } from "../../Services/fetchServices";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Camera } from "react-camera-pro";
import moment from "moment/moment";
import Header from "../Header & Drawer/Header";

const theme = createTheme();
export default function ShowVisitors(props) {
  // var classes = useStyles();
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
  const [filter, setFilter] = useState("All");
  const [Image, setImage] = useState(null);
  const [DepartmentData, setDepartmentData] = useState([]);
  const [LocationData, setLocationData] = useState([]);

  useEffect(() => {
    // fetchDepartment();
    // fetchLocation();
  }, []);

  const fetchDepartment = async () => {
    try {
      // let result = await getDataAxios(`department/departmentDisplay`);
      // if (result.length != 0) {
      //   setDepartmentData(result.result);
      // } else {
      //   Swal.fire({
      //     icon: "error",
      //     title: result.message,
      //   });
      // }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
      });
    }
  };

  const fetchLocation = async () => {
    try {
      // let result = await getDataAxios(`location/locationListView`);
      // if (result.length != 0) {
      //   setLocationData(result.result);
      // } else {
      //   Swal.fire({
      //     icon: "error",
      //     title: result.message,
      //   });
      // }
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
      // const config = { headers: { "content-type": "multipart/form-data" } };
      // let response = await putDataAndImageAxios(`visitor/member/add`, formData, config);
      // console.log("response", response);
    } catch (error) { }
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

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="newvisitorcontainer">
          <Header />
          <Grid item xs={12} sm={12} style={{ width: '100%', backgroundColor: '#fff' }}>
            <Grid container>
              <Grid item xs={12} sm={4} style={{ padding: '0px 5%' }}>
                <div className="main-heading">Add New Visitor</div>
              </Grid>
              <Grid item xs={12} className="center" sm={6} style={{ padding: '0px 5%' }}>
                <FormControl fullWidth size="small" variant="outlined">
                  <OutlinedInput
                    style={{ borderRadius: 15 }}
                    id="outlined-adornment-weight"
                    startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} className="center-space-between" sm={2} style={{ padding: '0px 5%' }}>
                <div>
                  <div className="defaultcolor">23-Feb-2023</div>
                  <div>06 Visits</div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <div className="newvisitorbox">
            <div className="subcontainerbox">
              <Grid container spacing={2}>
                <Grid item xs={6} sm={2}>
                  <TextField
                    // id="input-with-icon-textfield"
                    size="small"
                    sx={{ width: 160 }}
                    id="outlined-select-currency"
                    // label="TextField"
                    select
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FilterIcon style={{ fontSize: 14 }} />
                        </InputAdornment>
                      ),
                    }}
                    value={filter}
                    onChange={handleFilter}
                  // variant="standard"
                  >
                    <MenuItem value="All">
                      All
                    </MenuItem>
                    <MenuItem value="Month">
                      Month
                    </MenuItem>
                    <MenuItem value="From - To">
                      From - To
                    </MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={6} sm={7}>
                  {filter == "All" ? <> </> : filter == "Month" ? <> <TextField
                    // id="input-with-icon-textfield"
                    size="small"
                    sx={{ width: 180 }}
                    id="outlined-select-currency"
                    // label="TextField"
                    select
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          Month-
                        </InputAdornment>
                      ),
                    }}
                    value={filter}
                    onChange={handleFilter}
                  // variant="standard"
                  >
                    <MenuItem value="All">
                      January
                    </MenuItem>
                    <MenuItem value="Month">
                      February
                    </MenuItem>
                    <MenuItem value="From - To">
                      March
                    </MenuItem>
                  </TextField></> : <><TextField
                    // id="input-with-icon-textfield"
                    size="small"
                    sx={{ width: 180 }}
                    id="outlined-select-currency"
                    // label="TextField"
                    select
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FilterIcon style={{ fontSize: 14 }} />
                        </InputAdornment>
                      ),
                    }}
                    value={filter}
                    onChange={handleFilter}
                  // variant="standard"
                  >
                    <MenuItem value="All">
                      All
                    </MenuItem>
                    <MenuItem value="Month">
                      Month
                    </MenuItem>
                    <MenuItem value="From - To">
                      From - To
                    </MenuItem>
                  </TextField></>}
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    // id="input-with-icon-textfield"
                    size="small"
                    fullWidth
                    id="outlined-select-currency"
                    // label="TextField"
                    select
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          Department-
                        </InputAdornment>
                      ),
                    }}
                    value={filter}
                    onChange={handleFilter}
                  // variant="standard"
                  >
                    <MenuItem value="All">
                      All
                    </MenuItem>
                    <MenuItem value="Month">
                      Month
                    </MenuItem>
                    <MenuItem value="From - To">
                      From - To
                    </MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <table class="table">
                    <thead style={{ borderRadius: 10, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px rgba(0, 0, 0, 0.1) 0px 0px 1px 0px' }}>
                      <th>Name</th>
                      <th>Mobile No.</th>
                      <th>Department</th>
                      <th>Location</th>
                      <th>Purpose</th>
                      <th>Reference</th>
                      <th>Date</th>
                      <th>Time</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Name">1</td>
                        <td data-label="Mobile No.">Dinesh</td>
                        <td data-label="Department">34</td>
                        <td data-label="Location">50%</td>
                        <td data-label="Purpose">Passed</td>
                        <td data-label="Reference">Passed</td>
                        <td data-label="Date">Passed</td>
                        <td data-label="Time">Passed</td>
                      </tr>
                      <tr>
                        <td data-label="Name">1</td>
                        <td data-label="Mobile No.">Dinesh</td>
                        <td data-label="Department">34</td>
                        <td data-label="Location">50%</td>
                        <td data-label="Purpose">Passed</td>
                        <td data-label="Reference">Passed</td>
                        <td data-label="Date">Passed</td>
                        <td data-label="Time">Passed</td>
                      </tr>
                      <tr>
                        <td data-label="Name">1</td>
                        <td data-label="Mobile No.">Dinesh</td>
                        <td data-label="Department">34</td>
                        <td data-label="Location">50%</td>
                        <td data-label="Purpose">Passed</td>
                        <td data-label="Reference">Passed</td>
                        <td data-label="Date">Passed</td>
                        <td data-label="Time">Passed</td>
                      </tr>

                    </tbody>
                  </table>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
