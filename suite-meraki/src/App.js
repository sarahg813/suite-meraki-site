import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage";
import About from "./components/AboutPage";
import HairServices from "./components/HairServicesPage";
import EyebrowServices from "./components/EyebrowServicesPage";
import Gallery from "./components/GalleryPage";
import Contact from "./components/ContactPage";
import Footer from "./components/Footer";
import theme from "./theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faEnvelope, faPhone, faMapMarkerAlt);

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh",
    width: "100vw",
  },
  main: {
    display: "flex",
    flex: "auto",
    width: "100vw",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={classes.app}>
            <CssBaseline />
            <Navbar />
            <Container component="main" className={classes.main}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/hairservices" component={HairServices} />
              <Route path="/eyebrowservices" component={EyebrowServices} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
            </Container>
            <Footer />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
