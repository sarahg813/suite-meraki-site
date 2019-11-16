import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  Paper,
  useScrollTrigger
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  transparentBar: {
    backgroundColor: "transparent"
  },
  colorBar: {
    backgroundColor: "#0a0909"
  },
  item: {
    fontFamily: "Roboto Condensed"
  },

  padding: {
    paddingRight: 30,
    cursor: "pointer"
  },
  button: {
    margin: 1,
    color: "#fff",
    fontFamily: "Roboto Condensed"
  },
  toolbar: {
    display: "flex"
  },
  menuitem: {
    fontFamily: "Roboto Condensed",
    fontSize: "0.875rem"
  }
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

export default function DesktopNavbar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState(0);
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

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 25;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <ElevationScroll {...props}>
      <AppBar
        elevation={0}
        position="sticky"
        className={scroll ? classes.transparentBar : classes.colorBar}
      >
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
            variant="button"
            color="textPrimary"
            ref={anchorRef}
            aria-controls="menu-list-grow"
            aria-haspopup="true"
            onClick={handleToggle}
            className={classes.button}
          >
            Services
          </Button>
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
    </ElevationScroll>
  );
}
