import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  background: {
    height: "100%",
    minHeight: "100vh",
    width: "100vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/images/dark_wood.png")',
    zIndex: -2
  }
}));

const Background = () => {
  const classes = useStyles();
  return <span className={classes.background}>.</span>;
};

export default Background;
