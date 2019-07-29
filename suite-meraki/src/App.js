import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import theme from "./theme";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh"
  },
  main: {
    display: "flex",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    flex: "1 0 auto"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={classes.root}>
            <CssBaseline />
            <Navbar />
            <Container component="main" className={classes.main}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
            </Container>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
