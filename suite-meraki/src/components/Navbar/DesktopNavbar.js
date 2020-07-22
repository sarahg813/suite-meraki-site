import React from "react";
import { NavLink, withRouter } from "react-router-dom";
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
  useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  navbarTransparent: {
    backgroundColor: "transparent",
  },
  navbarColor: {
    backgroundColor: "#0a0909",
  },
  navButton: {
    margin: 1,
    color: "#fff",
    fontFamily: "Roboto Condensed",
    fontSize: "1.12rem",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },
  navbarRoot: {
    display: "flex",
  },
  menuItem: {
    fontFamily: "Roboto Condensed",
    fontSize: "1rem",
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const DesktopNavbar = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState(true);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
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

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 50;
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
        className={scroll ? classes.navbarTransparent : classes.navbarColor}
      >
        <Toolbar className={classes.navbarRoot}>
          <Box flexGrow={1}>
            {props.location.pathname === "/" ? null : (
              <Button component={NavLink} exact to="/" variant="button">
                <img
                  src="./images/SuiteMeraki-300.png"
                  alt="small-suite-meraki-logo"
                  width="150px"
                />
              </Button>
            )}
          </Box>
          <div></div>
          <Button
            component={NavLink}
            to="/about"
            variant="button"
            color="textPrimary"
            className={classes.navButton}
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
            className={classes.navButton}
          >
            Services &amp; More <ExpandMore />
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
                    placement === "bottom" ? "center top" : "center bottom",
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
                        to="/services"
                        className={classes.menuItem}
                      >
                        Services
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        component={NavLink}
                        to="/pmu-guidelines"
                        className={classes.menuItem}
                      >
                        PMU Guidelines
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
            className={classes.navButton}
          >
            Gallery
          </Button>
          <Button
            component={NavLink}
            to="/contact"
            variant="button"
            color="textPrimary"
            className={classes.navButton}
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
            className={classes.navButton}
          >
            BOOK NOW &nbsp;
            <FontAwesomeIcon icon="external-link-alt" size="xs" />
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default withRouter(DesktopNavbar);
