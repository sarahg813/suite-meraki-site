import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TitleComponent } from "../tools/TitleComponent";
import LeafletMap from "./LeafletMap";

const useStyles = makeStyles((theme) => ({
  contactTitle: {
    color: "white",
    fontFamily: "Arapey",
  },
  contactTitleContainer: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
  contactInfoContainer: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  contactContainers: {
    marginBottom: "1rem",
  },
  contactInfoTitle: {
    color: "white",
    fontFamily: "Arapey",
    fontSize: "1.5rem",
    lineHeight: "3rem",
  },
  contactInfoText: {
    color: "white",
    fontSize: "1.1rem",
  },
  contactInfoLink: {
    color: "white",
    textDecoration: "none",
  },
  mapContainer: {
    width: "500px",
    height: "500px",
    "@media (max-width: 767px)": {
      width: "325px",
      height: "325px",
    },
  },
}));

const ContactPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.contactRoot}>
      <TitleComponent title="Contact | Suite Meraki&#174; | Hair &amp; Beauty Salon | San Jose, CA" />
      <div className={classes.contactTitleContainer}>
        <Typography
          variant="h4"
          component="h2"
          className={classes.contactTitle}
        >
          Contact
        </Typography>
      </div>
      <Container className={classes.contactInfoContainer}>
        <Grid container justify="center" alignItems="center" spacing={0}>
          <Grid item xs={12} sm={4}>
            <Container className={classes.contactContainers}>
              <Typography className={classes.contactInfoTitle}>
                Address
              </Typography>
              <Typography className={classes.contactInfoText}>
                3851 Charter Park Drive
                <br />
                Suite V
                <br />
                San Jose, CA 95136
              </Typography>
            </Container>
            <Container className={classes.contactContainers}>
              <Typography className={classes.contactInfoTitle}>
                Email
              </Typography>
              <Typography className={classes.contactInfoText}>
                <a
                  href="mailto:suite.meraki.studio@gmail.com"
                  target="_top"
                  className={classes.contactInfoLink}
                >
                  suite.meraki.studio&#64;gmail.com
                </a>
              </Typography>
            </Container>
            <Container className={classes.contactContainers}>
              <Typography className={classes.contactInfoTitle}>
                Text / Call
              </Typography>
              <Typography className={classes.contactInfoText}>
                <a
                  href={`tel:+1-408-677-6897`}
                  className={classes.contactInfoLink}
                >
                  408.677.6897
                </a>
              </Typography>
            </Container>
            <Container className={classes.contactContainers}>
              <Typography className={classes.contactInfoTitle}>
                Business Hours
              </Typography>
              <Typography className={classes.contactInfoText}>
                Tuesday &mdash; Thursday
                <br />
                11am &mdash; 4pm
                <br />
                Saturday
                <br />
                9am &mdash; 4pm
                <br /> Closed: Sunday, Monday &amp; Friday
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container className={classes.mapContainer}>
              <LeafletMap />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactPage;
