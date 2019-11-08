import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  home: {
    alignItems: "center",
    flexGrow: "1"
  },
  title: {
    fontFamily: "Petit Formal Script",
    color: theme.palette.primary.main,
    fontWeight: 500
  }
}));

const EyebrowServices = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.home}>
      <Typography variant="h1" className={classes.title}>
        EyebrowServices
      </Typography>
    </Grid>
  );
};

export default EyebrowServices;
