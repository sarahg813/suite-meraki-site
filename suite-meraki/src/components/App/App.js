import React from "react";
import { withRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import MainContainer from "../MainContainer";
import Navbar from "../Navbar";
import Footer from "../Footer";
import theme from "../muiTheme/theme";

library.add(fab, faEnvelope, faPhone, faMapMarkerAlt);

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh",
    width: "100vw",
  },
}));

function App(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <div className={classes.app}>
          <CssBaseline />
          <Navbar />
          <MainContainer />
          <Footer />
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default withRouter(App);
