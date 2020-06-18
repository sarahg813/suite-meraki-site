import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TitleComponent } from "../tools/TitleComponent";

const useStyles = makeStyles((theme) => ({
  aboutTitle: {
    color: "white",
    fontFamily: "Arapey",
  },
  aboutTitleContainer: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
  aboutStudioContainer: {
    paddingLeft: "9rem",
    paddingRight: "9rem",
  },
  aboutStudio: {
    color: "white",
    fontFamily: "Roboto Condensed",
    fontSize: "1.2em",
  },
  aboutInfoContainer: {
    marginTop: "6rem",
    width: "60rem",
    backgroundColor: "#0c0c0c",
  },
  aboutPicContainer: {
    width: "25rem",
    paddingTop: "3rem",
    paddingBottom: "3rem",
  },
  image: {
    width: "100%",
  },
  aboutTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  aboutInfoText: {
    color: "white",
    fontFamily: "Gotu",
    fontSize: "1em",
    lineHeight: "1.7em",
  },
  aboutQuotemark: {
    color: "white",
    fontFamily: "Arizonia",
    fontSize: "2em",
  },
  aboutInfoSubtext: {
    color: "white",
    fontFamily: "Roboto Condensed",
    fontSize: "1em",
  },
  meetTayContainer: {
    color: "white",
    fontFamily: "Roboto Condensed",
    display: "flex",
    width: "60rem",
    marginBottom: "-11rem",
  },
  meetText: {
    fontSize: "1.5rem",
    lineHeight: "3.5",
    marginRight: "1rem",
  },
  tayText: {
    fontSize: "4rem",
    lineHeight: "0",
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.aboutRoot}>
      <TitleComponent title="About | Suite Meraki&#174; | Hair &amp; Beauty Salon | San Jose, CA" />
      <div className={classes.aboutTitleContainer}>
        <Typography variant="h3" className={classes.aboutTitle}>
          About
        </Typography>
      </div>
      <Container className={classes.aboutStudioContainer}>
        <Typography className={classes.aboutStudio}>
          Suite Meraki&#174; is a full service salon. Established in 2014.
          Former independent contractor decided to open her own business.
          Initially started with "Tay's Studio" and grew into a larger studio
          re-branding as "Suite Sixteen" and officially now "Suite Meraki, LLC"
          offering more beauty services than just hair.
        </Typography>
      </Container>
      <Container className={classes.meetTayContainer}>
        <div>
          <h4 className={classes.meetText}>M E E T</h4>
        </div>
        <div>
          <h4 className={classes.tayText}>TAY</h4>
        </div>
      </Container>
      <Container className={classes.aboutInfoContainer}>
        <Grid container justify="center" alignItems="center" spacing={0}>
          <Grid item xs={12} sm={6} className={classes.aboutGridPic}>
            <Container className={classes.aboutPicContainer}>
              <img
                src="https://res.cloudinary.com/duuyxqnfi/image/upload/v1592406484/suite-meraki/tay-pic.png"
                className={classes.image}
                alt="picture of Tay Le, Owner of Suite Meraki"
              />
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.aboutGridText}>
            <Container className={classes.aboutTextContainer}>
              <div>
                <Typography className={classes.aboutInfoText}>
                  <span className={classes.aboutQuotemark}>&ldquo;</span>
                  Hi loves! It's me, Tay. A little bit about me is that I've
                  been devoted to the beauty industry pretty much since I had
                  Barbie dolls but professionally practicing since 2004. I can
                  proudly say that there is nothing else I'd rather do but to
                  make each and every one of you feel beautiful inside and out.
                  My passion runs deeper than just beauty. I am also your
                  confidante, your friendly neighborhood hairapist. I've
                  expanded into the permanent makeup side of things because that
                  was also one of my passions. So when you are ready, give me a
                  text and we'll set you up for some beauty love!
                  <span className={classes.aboutQuotemark}>&rdquo;</span>
                </Typography>
              </div>
              <br />
              <div style={{ width: "2em" }}>
                <hr />
              </div>
              <br />
              <div>
                <Typography className={classes.aboutInfoSubtext}>
                  OWNER
                </Typography>
                <Typography className={classes.aboutInfoSubtext}>
                  LICENSED COSMETOLOGIST
                </Typography>
                <Typography className={classes.aboutInfoSubtext}>
                  CERTIFIED MICROBLADE | OMBRE BROW SPECIALIST
                </Typography>
              </div>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutPage;
