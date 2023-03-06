import { Grid, Divider } from "@mui/material";
import Header from "../Header & Drawer/Header";
import { useNavigate } from "react-router-dom";

export default function Entrymode(props) {
  const Navigate = useNavigate();

  const handleShowmobile = () => {
    Navigate("/MobileNumber");
  };

  const handleShowVisitorDetails = () => {
    Navigate("/FieldVisit");
  };

  return (
    <>
      <div>
        <Header />
      </div>

      <Divider style={{ width: "10%" }} />
      <Grid xs={12} class="headertwo">
        <div className="headertwotext">Add New Visitor</div>
      </Grid>

      <div class="maincontainerEntry">
        <div class="subContainer">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} className="selecttext ">
              select entry mode
            </Grid>

            <Grid item xs={6} sm={6}>
              <div className="selectbtn" onClick={handleShowmobile}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src="./assets/office.png"
                    style={{ width: "50%", padding: "4%", color: "#434343" }}
                  />
                </div>
                <div>Office</div>
              </div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <div className="selectbtn" onClick={handleShowVisitorDetails}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src="./assets/field3.png"
                    style={{ width: "20%", padding: "4%", color: "#434343" }}
                  />
                </div>
                <div>field</div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
