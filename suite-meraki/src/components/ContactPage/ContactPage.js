import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TitleComponent } from "../tools/TitleComponent";

const useStyles = makeStyles((theme) => ({
  contactTitle: {
    color: "white",
    fontFamily: "Arapey",
  },
  contactTitleContainer: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },

  image: {
    width: "100%",
  },
  contactInfoText: {
    color: "white",
    fontFamily: "Roboto Condensed",
    fontSize: "1em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5em",
    },
  },
  contactInfoLink: {
    color: "white",
    textDecoration: "none",
  },
}));

const ContactPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.contactRoot}>
      <TitleComponent title="Contact | Suite Meraki&#174; | Hair &amp; Beauty Salon | San Jose, CA" />
      <div className={classes.contactTitleContainer}>
        <Typography variant="h3" className={classes.contactTitle}>
          Contact
        </Typography>
      </div>
      <Container className={classes.contactInfoContainer}>
        <Grid container justify="center" alignItems="center" spacing={0}>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.contactInfoText}>
              <FontAwesomeIcon icon="map-marker-alt" /> 385 Charter Park Drive
              Suite V
              <br /> &nbsp; &nbsp; San Jose, CA 95136
              <br />
              <br />
              <FontAwesomeIcon icon="envelope" />{" "}
              <a
                href="mailto:suite.meraki.studio@gmail.com"
                target="_top"
                className={classes.contactInfoLink}
              >
                suite.meraki.studio&#64;gmail.com
              </a>
              <br />
              <br />
              <FontAwesomeIcon icon="phone" />{" "}
              <a
                href={`tel:+1-408-677-6897`}
                className={classes.contactInfoLink}
              >
                (408) 677-6897
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src="/images/map_example.png" className={classes.image} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactPage;
