import { useState } from "react";
import {
  Grid, TextField, Button, Select, FormLabel, OutlinedInput, MenuItem, FormControl,
  FormControlLabel, InputLabel, Radio, RadioGroup
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import AddIcon from "@mui/icons-material/Add"
import DeleteIcon from "@mui/icons-material/Delete"

import { useStyles } from "./AddvisitorCss";
export default function AddVisitorForm() {

  var classes = useStyles();
  const [value, setValue] = useState(dayjs("2022-02-23"));

  const [location, setLocation] = useState("");

  const handleLocation = async (event) => {
    setLocation(event.target.value);
  };

  ///Field add function//

  const [userdefault, setUserDefault] = useState('')
  const [names, setNames] = useState([userdefault])

  const handleAdd = () => {
    const data = [...names, []]
    setNames(data)
  }
  const handleChange = (onchangevalue, i) => {

    const inputdata = [...names]
    inputdata[i] = onchangevalue.target.value
    setNames(inputdata)
  }
  const handleDelete = (i) => {
    const deletename = [...names]
    deletename.splice(i, 1)
    setNames(deletename)
  }
  console.log("data", names);
  ///////end of functions


  return (
    <>
      <Grid
        container
        spacing={2}
        className={classes.maincontainer}
      >
        <Grid item xs={12} sm={12}>
          <div className={classes.headingText} >
            Enter Visitor Details
          </div>
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
          <div
            className={classes.label}
          >
            Visitor type:
          </div>
        </Grid>

        <Grid item xs={4} sm={1}  >
          <Button
            variant="contained"
            class={classes.typebutton}
          >
            <PersonIcon style={{ fontSize: 15 }} /> Single
          </Button>
        </Grid>

        <Grid item xs={4} sm={1}  >
          <Button
            variant="contained"
            class={classes.typebutton}
          >
            <GroupIcon style={{ fontSize: 15 }} /> Group
          </Button>
        </Grid>
        <Grid item xs={12} sm={8.5} />
        {names.length >= 10 ? <> </> : <><Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'end', paddingTop: '0 !important', paddingBottom: '0', backgroundColor: 'red' }}>
          <button
            style={{
              width: 'auto',
              color: '#347DFC',
              height: 20,
              borderRadius: 10,
              fontFamily: "Poppins",
              border: 'none',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
            onClick={() => handleAdd()}>
            <AddIcon></AddIcon> Add more
          </button>
        </Grid>
        </>}

        {
          names.map((item, index) => {
            return (
              <>
                <Grid item xs={12} sm={1.5}>
                  <div className={classes.label} >
                    {index == 0 ? <> Name (Primary)</> : <>{index + 1}nd Name </>}
                  </div>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    onChange={e => handleChange(e, index)}
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
                <Grid item xs={12} sm={0.5} sx={{ backgroundColor: 'green', display: 'flex', justifyContent: 'right' }} >
                  <button
                    style={{
                      width: 'auto',
                      color: '#347DFC',
                      height: 20,
                      borderRadius: 10,
                      fontFamily: "Poppins",
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      alignItems: 'center'
                    }}
                    onClick={e => handleDelete(index)}>
                    <DeleteIcon></DeleteIcon>
                  </button>
                </Grid>

              </>
            )
          })
        }
      </Grid>
    </>
  );
}
