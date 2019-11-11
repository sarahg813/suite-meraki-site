import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  Grid,
  SwipeableDrawer,
  MenuList,
  MenuItem,
  Collapse
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
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
}));

export default function MobileNavbar() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

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
                setDrawer(true);
              }}
            />
            <Button component={NavLink} exact to="/">
              <img
                src="./images/SuiteMeraki-300.png"
                alt="small-suite-meraki-logo"
                width="125px"
              />
            </Button>

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
        open={drawer}
        onClose={() => {
          setDrawer(false);
        }}
        onOpen={() => {
          setDrawer(true);
        }}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => {
            setDrawer(false);
          }}
          onKeyDown={() => {
            setDrawer(false);
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
              onClick={handleClick}
              divider
            >
              Services
              {open ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <MenuList component="div" disablePadding>
                <MenuItem
                  component={NavLink}
                  to="/hairservices"
                  className={classes.menuitem}
                >
                  Haircut &amp; Color
                </MenuItem>
                <MenuItem
                  component={NavLink}
                  to="/eyebrowservices"
                  className={classes.menuitem}
                >
                  Eyebrows &amp; more
                </MenuItem>
              </MenuList>
            </Collapse>
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
