import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  Grid,
  SwipeableDrawer,
  MenuList,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DesktopNavbar from "./DesktopNavbar";
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
