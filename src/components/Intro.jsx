import React from "react";
import { Grid, Button } from "@material-ui/core/";
import Devices from "../images/illustration-devices.svg";

function Intro() {
  return (
    <Grid container direction="row" className="intro-cont reverse">
      <Grid item md={6} xs={12} className="text-col">
        <Grid container direction="row" className="new-row">
          <Grid container className="new">
            <p>New</p>
          </Grid>
          <p> Monograph Dashboard</p>
        </Grid>
        <h1>Powerful insights into your team </h1>
        <h3> Project planning and time tracking for agile teams</h3>
        <Grid container direction="row">
          <Button variant="contained" className="demo-btn">
            Schedule a demo
          </Button>
          <h4> to see a live preview</h4>
        </Grid>
      </Grid>
      <Grid item md={6}>
        <img alt="devices" src={Devices} />
      </Grid>
    </Grid>
  );
}

export default Intro;