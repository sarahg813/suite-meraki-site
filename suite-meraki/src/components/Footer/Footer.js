import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <Grid container xs={12} justify="space-between">
        <Grid item>
          <Typography
            variant="body1"
            component="h1"
            className={classes.footerText}
          >
            Suite Meraki&#174; &copy; 2020
          </Typography>
        </Grid>
        <Grid item>
          <a
            href="https://www.instagram.com/suite_meraki/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              className={classes.icons}
              icon={["fab", "instagram"]}
            />
          </a>
          <a
            href="https://www.facebook.com/tays.studio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon
              className={classes.icons}
              icon={["fab", "facebook"]}
            />
          </a>
          <a
            href="https://www.yelp.com/biz/suite-meraki-san-jose-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yelp"
          >
            <FontAwesomeIcon className={classes.icons} icon={["fab", "yelp"]} />
          </a>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
