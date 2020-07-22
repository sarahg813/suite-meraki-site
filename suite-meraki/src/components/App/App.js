import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import MainContainer from "../MainContainer";
import Navbar from "../Navbar";
import Footer from "../Footer";
import theme from "../muiTheme/theme";
import TransitionComponent from "../tools/TransitionComponent";

library.add(fab, faExternalLinkAlt);

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh",
    width: "100vw",
    backgroundImage: "url(/images/dark_wood.png)",
  },
  onlyHome: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh",
    width: "100vw",
    "@media (max-width: 767px)": {
      backgroundColor: "black",
    },
  },
}));

function App(props) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <React.Fragment>
      <TransitionComponent in={!isLoading}>
        <MuiThemeProvider theme={theme}>
          <div
            className={
              props.location.pathname === "/" ? classes.onlyHome : classes.app
            }
          >
            <CssBaseline />
            <Navbar />
            <MainContainer />
            <Footer />
          </div>
        </MuiThemeProvider>
      </TransitionComponent>
    </React.Fragment>
  );
}

export default withRouter(App);
