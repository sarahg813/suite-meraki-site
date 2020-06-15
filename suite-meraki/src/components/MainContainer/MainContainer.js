import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Home from "../HomePage";
import About from "../AboutPage";
import HairServices from "../HairServicesPage";
import EyebrowServices from "../EyebrowServicesPage";
import Gallery from "../GalleryPage";
import Contact from "../ContactPage";
import "./MainContainer.css";

const useStyles = makeStyles((theme) => ({
  mainRoot: {
    display: "flex",
    flex: "auto",
    width: "100vw",
  },
  sectionContainer: {
    height: "100%",
  },
}));

const MainContainer = ({ location }) => {
  const classes = useStyles();
  const currentKey = location.pathname.split("/")[1] || "/";

  return (
    <Container component="main" className={classes.mainRoot}>
      <TransitionGroup>
        <CSSTransition key={currentKey} classNames="fade" timeout={300} appear>
          <section className={classes.sectionContainer}>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/hairservices" component={HairServices} />
              <Route path="/eyebrowservices" component={EyebrowServices} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

export default withRouter(MainContainer);
