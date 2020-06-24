import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typist from "react-typist";
import { TitleComponent } from "../tools/TitleComponent";

const useStyles = makeStyles((theme) => ({
  homeRoot: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    "@media (max-width: 767px)": {
      height: "100%",
      minHeight: "100vh",
    },
  },
  homeLogo: {
    display: "flex",
    width: "100%",
    marginBottom: "1em",
  },
  homeLogoSubtext: {
    display: "flex",
    fontFamily: "Roboto Condensed",
    fontWeight: 300,
    color: "white",
    textAlign: "right",
    justifyContent: "flex-end",
  },
  bgVideo: {
    position: "fixed",
    top: 0,
    left: -400,
    minWidth: "100%",
    minHeight: "100%",
    zIndex: -1,
    "@media (max-width: 767px)": {
      display: "none",
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeRoot}>
      <TitleComponent title="Home | Suite Meraki&#174; | Hair &amp; Beauty Salon | San Jose, CA" />
      <video
        loop
        autoPlay
        muted
        poster="/images/static-bg.jpg"
        className={classes.bgVideo}
      >
        <source src="./videos/hair-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Grid container xs={6} direction="column">
        <Grid item xs={12}>
          <img
            src="./images/SuiteMeraki-1260.png"
            alt="large Suite Meraki logo"
            className={classes.homeLogo}
          />
        </Grid>
        <Grid item xs={12}>
          <Typist avgTypingDelay={100} startDelay={2000}>
            <Typography variant="h5" className={classes.homeLogoSubtext}>
              to do something with soul,
              <br />
              creativity, or love; to put the essence
              <br />
              of yourself into your work.
            </Typography>
          </Typist>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
