import React from "react";
import { useMediaQuery } from "react-responsive";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typist from "react-typist";
import { TitleComponent } from "../tools/TitleComponent";

const useStyles = makeStyles((theme) => ({
  homeRoot: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    "@media (max-width: 767px)": {
      height: "80vh",
      flexDirection: "column",
      alignItems: "flex-end",
    },
  },
  homeLogoContainer: {
    width: "45rem",
    "@media (max-width: 767px)": {
      width: "20rem",
    },
  },
  homeLogoImg: {
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
    "@media (max-width: 767px)": {
      fontSize: "1rem",
    },
  },
  bgVideo: {
    position: "fixed",
    top: 0,
    left: -400,
    minWidth: "100%",
    minHeight: "100%",
    zIndex: -1,
  },
  bgGif: {
    width: "100%",
    margin: "3rem 0 -2.5rem 0",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={classes.homeRoot}>
      <TitleComponent title="Home | Suite Meraki&#174; | Hair &amp; Beauty Salon | San Jose, CA" />
      {isDesktopOrLaptop && (
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
      )}
      {isMobile && (
        <img
          src="./videos/hair-gif.gif"
          alt="hair flowing gif"
          className={classes.bgGif}
        />
      )}

      <div className={classes.homeLogoContainer}>
        <div className={classes.homeLogoImgContainer}>
          {isDesktopOrLaptop && (
            <img
              src="./images/SuiteMeraki-1260.png"
              alt="large Suite Meraki logo"
              className={classes.homeLogoImg}
            />
          )}
          {isMobile && (
            <img
              src="./images/SuiteMeraki-300.png"
              alt="Suite Meraki logo"
              className={classes.homeLogoImg}
            />
          )}
        </div>
        <div className={classes.homeLogoSubtextContainer}>
          <Typist avgTypingDelay={100} startDelay={2000}>
            <Typography variant="h5" className={classes.homeLogoSubtext}>
              to do something with soul,
              <br />
              creativity, or love; to put the essence
              <br />
              of yourself into your work.
            </Typography>
          </Typist>
        </div>
      </div>

      {/* <Grid container xs={12} m={6} direction="column">
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
      </Grid> */}
    </div>
  );
};

export default HomePage;
