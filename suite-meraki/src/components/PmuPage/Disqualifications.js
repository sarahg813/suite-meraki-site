import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "1.5rem",
    "@media (max-width: 767px)": {
      padding: "1rem",
    },
  },
  title: {
    fontFamily: "Arapey",
    marginBottom: "1rem",
  },
  paragraph: {
    marginBottom: ".75rem",
  },
}));

const Disqualifications = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3" className={classes.title}>
          Disqualifications
        </Typography>
        <Typography className={classes.paragraph}>
          Please do not book an appointment if any of the below applies to you:
        </Typography>
        <ul>
          <li>Under the age of 18</li>
          <li>Pregnant or nursing</li>
          <li>Taking blood thinning medications</li>
          <li>Have viral infections and/or diseases</li>
          <li>Diabetic</li>
          <li>Epilepsy</li>
          <li>Thyroid condition</li>
          <li>Undergoing chemotherapy</li>
          <li>Allergic to pigmentation or make up</li>
          <li>Prone to keloids or hypertrophic scarring</li>
          <li>
            Have skin irritations (such as rashes, sunburn, acne, rosacea,
            dermatitis, psoriasis, etc.) near or on the treated area
          </li>
          <li>Had botox or fillers in the past 2 months</li>
          <li>Used Accutane within the past year</li>
          <li>Have a pacemaker or major heart problems</li>
          <li>Excessive oily skin</li>
        </ul>
      </Paper>
    </div>
  );
};

export default Disqualifications;
