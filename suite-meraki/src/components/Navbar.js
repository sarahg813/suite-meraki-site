import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  withStyles,
  Grid,
  SwipeableDrawer,
  MenuList,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styleSheet = {
  appbar: {
    backgroundColor: "black"
  },
  item: {
    fontFamily: "Roboto Condensed"
  },
  mobileBar: {
    backgroundColor: "black"
  },
  list: {
    width: 200
  },
  padding: {
    paddingRight: 30,
    cursor: "pointer"
  },
  sideBarIcon: {
    padding: 0,
    color: "white",
    cursor: "pointer"
  },
  button: {
    margin: 1,
    color: "#fff",
    fontFamily: "Roboto Condensed"
  },
  toolbar: {
    display: "flex"
  }
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerActivate: false, drawer: false };
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount() {
    if (window.innerWidth <= 600) {
      this.setState({ drawerActivate: true });
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        this.setState({ drawerActivate: true });
      } else {
        this.setState({ drawerActivate: false });
      }
    });
  }

  //Mobile Screens
  createDrawer() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" elevation={0} className={classes.mobileBar}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <MenuIcon
                className={classes.sideBarIcon}
                onClick={() => {
                  this.setState({ drawer: true });
                }}
              />
              <Button
                href="https://www.styleseat.com/tayle"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                color="primary"
                size="small"
                className={classes.button}
              >
                BOOK NOW
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={this.state.drawer}
          onClose={() => {
            this.setState({ drawer: false });
          }}
          onOpen={() => {
            this.setState({ drawer: true });
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
              this.setState({ drawer: false });
            }}
            onKeyDown={() => {
              this.setState({ drawer: false });
            }}
          >
            <MenuList className={classes.list}>
              <MenuItem
                className={classes.item}
                component={NavLink}
                exact
                to="/"
                button
                divider
              >
                <img
                  src="./images/SuiteMeraki-blk-250.png"
                  alt="small-suite-meraki-logo"
                  width="125px"
                />
              </MenuItem>
              <MenuItem
                className={classes.item}
                component={NavLink}
                to="/about"
                button
                divider
              >
                About
              </MenuItem>
              <MenuItem
                className={classes.item}
                component={NavLink}
                to="/services"
                button
                divider
              >
                Services
              </MenuItem>
              <MenuItem
                className={classes.item}
                component={NavLink}
                to="/gallery"
                button
                divider
              >
                Gallery
              </MenuItem>
              <MenuItem
                className={classes.item}
                component={NavLink}
                to="/contact"
                button
                divider
              >
                Contact
              </MenuItem>
            </MenuList>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }

  //Non-mobile screens
  destroyDrawer() {
    const { classes } = this.props;
    return (
      <AppBar position="static" elevation={1} className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Box flexGrow={1}>
            <Button component={NavLink} exact to="/" variant="button">
              <img
                src="./images/SuiteMeraki-300.png"
                alt="small-suite-meraki-logo"
                width="150px"
              />
            </Button>
          </Box>

          <Button
            component={NavLink}
            to="/about"
            variant="button"
            color="textPrimary"
            className={classes.button}
          >
            About
          </Button>
          <Button
            component={NavLink}
            to="/services"
            variant="button"
            color="textPrimary"
            className={classes.button}
          >
            Services
          </Button>
          <Button
            component={NavLink}
            to="/gallery"
            variant="button"
            color="textPrimary"
            className={classes.button}
          >
            Gallery
          </Button>
          <Button
            component={NavLink}
            to="/contact"
            variant="button"
            color="textPrimary"
            className={classes.button}
          >
            Contact
          </Button>

          <Button
            href="https://www.styleseat.com/tayle"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="primary"
            size="large"
            className={classes.button}
          >
            BOOK NOW
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
  render() {
    return (
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Navbar);
