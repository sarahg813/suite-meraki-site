import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Home from "../HomePage";
import About from "../AboutPage";
import Services from "../ServicesPage";
import Pmu from "../PmuPage";
import Gallery from "../GalleryPage";
import Contact from "../ContactPage";
import Forms from "../FormsPage";
import "./MainContainer.css";

const useStyles = makeStyles((theme) => ({
  mainRoot: {
    display: "flex",
    flex: "auto",
    width: "100vw",
  },
  sectionContainer: {
    height: "100%",
    width: "100%",
  },
  transitionGroup: {
    width: "100%",
  },
}));

const MainContainer = ({ location }) => {
  const classes = useStyles();
  const currentKey = location.pathname.split("/")[1] || "/";

  return (
    <Container component="main" className={classes.mainRoot}>
      <TransitionGroup className={classes.transitionGroup}>
        <CSSTransition key={currentKey} classNames="fade" timeout={500} appear>
          <section className={classes.sectionContainer}>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/pmu-guidelines" component={Pmu} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
              <Route path="/forms" component={Forms} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

export default withRouter(MainContainer);
