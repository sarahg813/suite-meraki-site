import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  Grid,
  SwipeableDrawer,
  MenuList,
  MenuItem,
  Collapse,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    fontFamily: "Roboto Condensed",
  },
  mobileBar: {
    backgroundColor: "black",
  },
  list: {
    width: 215,
  },
  padding: {
    paddingRight: 30,
    cursor: "pointer",
  },
  sideBarIcon: {
    padding: 0,
    color: "white",
    cursor: "pointer",
  },
  button: {
    margin: 1,
    color: "#fff",
    fontFamily: "Roboto Condensed",
  },
  toolbar: {
    display: "flex",
  },
}));

function MobileNavbar(props) {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const drawerClick = () => {
    setDrawer(false);
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
            {props.location.pathname === "/" ? null : (
              <Button component={NavLink} exact to="/">
                <img
                  src="./images/SuiteMeraki-300.png"
                  alt="small-suite-meraki-logo"
                  width="125px"
                />
              </Button>
            )}

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
        <div tabIndex={0} role="button">
          <MenuList className={classes.list}>
            <MenuItem
              className={classes.item}
              component={NavLink}
              onClick={drawerClick}
              onKeyDown={drawerClick}
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
              onClick={drawerClick}
              onKeyDown={drawerClick}
              to="/about"
              button
              divider
            >
              About
            </MenuItem>
            <MenuItem
              className={classes.item}
              button
              onClick={handleClick}
              divider
            >
              Services &amp; More
              {open ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <MenuList component="div" disablePadding>
                <MenuItem
                  component={NavLink}
                  onClick={drawerClick}
                  onKeyDown={drawerClick}
                  to="/services"
                  className={classes.item}
                >
                  &#9721; Services Price List
                </MenuItem>
                <MenuItem
                  component={NavLink}
                  onClick={drawerClick}
                  onKeyDown={drawerClick}
                  to="/microblading"
                  className={classes.item}
                  divider
                >
                  &#9722; Microblading Guidelines
                </MenuItem>
              </MenuList>
            </Collapse>
            <MenuItem
              className={classes.item}
              component={NavLink}
              onClick={drawerClick}
              onKeyDown={drawerClick}
              to="/gallery"
              button
              divider
            >
              Gallery
            </MenuItem>
            <MenuItem
              className={classes.item}
              component={NavLink}
              onClick={drawerClick}
              onKeyDown={drawerClick}
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

export default withRouter(MobileNavbar);
