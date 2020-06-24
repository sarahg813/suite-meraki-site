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
    "@media (max-width: 767px)": {
      paddingLeft: "1rem",
      paddingRight: "0",
    },
  },
  aboutStudio: {
    color: "white",
    fontFamily: "Roboto Condensed",
    fontSize: "1.2rem",
  },
  aboutInfoContainer: {
    marginTop: "6rem",
    width: "60rem",
    backgroundColor: "#0c0c0c",
    "@media (max-width: 767px)": {
      width: "20rem",
    },
  },
  aboutPicContainer: {
    width: "25rem",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    "@media (max-width: 767px)": {
      width: "15rem",
    },
  },
  image: {
    width: "100%",
  },
  aboutTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media (max-width: 767px)": {
      marginBottom: "2rem",
    },
  },
  aboutInfoText: {
    color: "white",
    fontFamily: "Gotu",
    fontSize: "1em",
    lineHeight: "1.7rem",
  },
  aboutInfoSubtext: {
    color: "white",
    fontFamily: "Roboto Condensed",
    fontSize: "1rem",
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
                  Tay has been certified in the beauty industry since 2004 and
                  she can’t imagine doing anything else. It’s been her passion
                  ever since she could recall playing with dolls and doing their
                  hair/makeup when she was a child. Some might call it an
                  obsession but it’s everything she believes in. She can
                  guarantee to put her whole heart into what she does to give
                  you the best results. Her goal is to bring out the best side
                  of you because everyone deserves to feel and look incredible.
                </Typography>
              </div>
              <br />
              <br />
              <div style={{ width: "2em" }}>
                <hr />
              </div>
              <br />
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
