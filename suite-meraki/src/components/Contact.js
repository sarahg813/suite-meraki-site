import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(theme => ({
  contact: {
    display: "flex",
    justifyContent: "center",
    flexGrow: "1",
    color: "white",
    width: "100vw"
  },
  container: {
    width: "75vw"
  },
  image: {
    width: "100%"
  },
  text: {
    fontFamily: "Roboto Condensed",
    fontSize: "1em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5em"
    }
  }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.contact}>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={0}
        className={classes.container}
      >
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h3">Contact</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.text}>
            <FontAwesomeIcon icon="envelope" />{" "}
            suite.meraki.studio&#64;gmail.com
            <br />
            <FontAwesomeIcon icon="phone" /> (408) 677-6897
            <br />
            <FontAwesomeIcon icon="map-marker-alt" /> 385 Charter Park Dr. Ste V
            <br /> &nbsp; &nbsp; San Jose, CA 95136
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="/images/map_example.png" className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
