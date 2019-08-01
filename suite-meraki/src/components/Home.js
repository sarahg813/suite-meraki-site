import React from "react";
import { CardMedia, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typist from "react-typist";

const useStyles = makeStyles(theme => ({
  home: {
    display: "flex",
    alignItems: "center",
    flexGrow: "1"
  },
  image: {
    display: "flex",
    width: "100%"
  },
  definition: {
    display: "flex",
    fontFamily: "Roboto Condensed",
    fontWeight: 300,
    color: "white",
    textAlign: "right",
    justifyContent: "flex-end"
  },
  video: {
    position: "fixed",
    top: 0,
    left: -400,
    minWidth: "100%",
    minHeight: "100%",
    zIndex: -1
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.home}>
        <video loop autoPlay muted className={classes.video}>
          <source src="./videos/hair-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Grid container xs={6} direction="column">
          <Grid item xs={12}>
            <img
              src="./images/SuiteMeraki-1260.png"
              alt="large-suite-meraki-logo"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12}>
            <Typist avgTypingDelay={100} startDelay={2000}>
              <Typography variant="h5" className={classes.definition}>
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
    </React.Fragment>
  );
};

export default Home;
