import React from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";

export default function LoginHeader() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div style={{ boxShadow: "1px 2px 10px lightgrey" }}>
      <Grid
        container
        sx={{
          alignItems: "center",
          display: "flex",
          backgroundColor: "white",
        }}
      >
        {isMatch ? (
          <Grid item xs={1} />
        ) : (
          <>
            <Grid item xs={3}>
              <img
                src="./images/left.jpg"
                style={{
                  width: "104%",
                  display: "flex",
                  overflow: "hidden",
                }}
              />
            </Grid>
            <Grid item xs={1} />
          </>
        )}
        {isMatch ? (
          <Grid item xs={4}>
            <img src="images/LOGO.svg" style={{ width: "100%" }}></img>
          </Grid>
        ) : (
          <Grid item xs={2}>
            <img src="images/LOGO.svg" style={{ width: "100%" }}></img>
          </Grid>
        )}
        <Grid item xs={1} />

        {isMatch ? (
          <Grid
            item
            xs={1}
            style={{ display: "flex", justifyContent: "right" }}
          >
            <img src="./images/Right.jpg" style={{ width: "150%" }}></img>
          </Grid>
        ) : (
          <Grid item xs={1}>
            <img src="./images/Right.jpg" style={{ width: "100%" }}></img>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
