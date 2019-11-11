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
  Popper,
  Grow,
  ClickAwayListener,
  Paper
} from "@material-ui/core";
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
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

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
              button
              ref={anchorRef}
              aria-controls="menu-list-grow"
              aria-haspopup="true"
              onClick={handleToggle}
              divider
            >
              Services
            </MenuItem>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom"
                  }}
                >
                  <Paper id="menu-list-grow">
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem
                          onClick={handleClose}
                          component={NavLink}
                          to="/hairservices"
                          className={classes.menuitem}
                        >
                          Haircut &amp; Color
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose}
                          component={NavLink}
                          to="/eyebrowservices"
                          className={classes.menuitem}
                        >
                          Eyebrows &amp; more
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
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
