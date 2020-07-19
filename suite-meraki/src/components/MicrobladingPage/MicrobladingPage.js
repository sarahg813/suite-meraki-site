import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TitleComponent } from "../tools/TitleComponent";
import BeforeTreatment from "./BeforeTreatment";
import AfterTreatment from "./AfterTreatment";

const useStyles = makeStyles((theme) => ({
  microbladingRoot: {
    width: "100%",
  },
  microbladingContainer: {
    margin: "2rem auto 2rem auto",
    width: "75vw",
    height: "auto",
  },
  microbladingTitle: {
    color: "white",
    fontFamily: "Arapey",
  },
  microbladingTitleContainer: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
}));

const MicrobladingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.microbladingRoot}>
      <TitleComponent title="Microblading Guidelines | Suite Meraki&#174; | Hair &amp; Beauty Salon | San Jose, CA" />
      <div className={classes.microbladingTitleContainer}>
        <Typography variant="h3" className={classes.microbladingTitle}>
          Microblading Guidelines
        </Typography>
      </div>
      <div className={classes.microbladingContainer}>
        <BeforeTreatment />
        <AfterTreatment />
      </div>
    </div>
  );
};

export default MicrobladingPage;
