import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "transparent",
    color: "white",
    flexShrink: 0,
  },
  footerText: {
    fontFamily: "Roboto Condensed",
  },
  icons: {
    fontSize: "1.5rem",
    margin: "0 1rem",
    color: theme.palette.primary.main,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container xs={12} justify="flex-start">
        <Grid item>
          <Typography
            variant="body1"
            component="h1"
            className={classes.footerText}
          >
            Suite Meraki&#174; &copy; 2020
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
