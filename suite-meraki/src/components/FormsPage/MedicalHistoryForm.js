import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
    paddingTop: "56.25%",
    height: "65vh",
    "@media (max-width: 767px)": {
      height: "60vh",
    },
  },
  iframe: {
    position: "absolute",
    top: " 0",
    left: " 0",
    width: "100%",
    height: "100%",
    border: "0",
    color: "black",
  },
}));

const MedicalHistoryForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <iframe
        className={classes.iframe}
        title="Medical Client History Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSclbgU5vV5tIbiwL59AII90Tg-u2gbK7m-vbLHutTn2FNE6lw/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default MedicalHistoryForm;
