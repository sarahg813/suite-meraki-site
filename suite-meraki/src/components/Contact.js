import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(theme => ({
  contact: {
    flexGrow: "1",
    color: "white"
  },
  text: {
    fontFamily: "Roboto Condensed"
  }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.contact}>
      <Grid container className={classes.contact}>
        <Typography variant="h3">Contact</Typography>
        <Typography className={classes.text}>
          <FontAwesomeIcon icon="envelope" /> suite.meraki.studio&#64;gmail.com
          <br />
          <FontAwesomeIcon icon="phone" /> (408) 677-6897
          <br />
          <FontAwesomeIcon icon="map-marker-alt" /> 385 Charter Park Dr. Ste V
          <br /> San Jose, CA 95136
        </Typography>
      </Grid>
    </div>
  );
};

export default Contact;
