import React from "react";
import PropTypes from "prop-types";
import { AppBar, Box, Typography, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TitleComponent } from "../tools/TitleComponent";
import BeforeTreatment from "./BeforeTreatment";
import AfterTreatment from "./AfterTreatment";
import Disqualifications from "./Disqualifications";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  PmuRoot: {
    width: "100%",
  },
  PmuContainer: {
    margin: "2rem auto 2rem auto",
    width: "75vw",
    height: "auto",
    "@media (max-width: 767px)": {
      margin: 0,
      width: "90vw",
    },
  },
  PmuTitle: {
    color: "white",
    fontFamily: "Arapey",
  },
  PmuTitleContainer: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
  PmuAppBar: {
    backgroundColor: "black",
    color: "white",
    marginBottom: "1rem",
  },
}));

const PmuPage = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.PmuRoot}>
      <TitleComponent title="PMU Guidelines | Suite Meraki&#174; | Hair &amp; Beauty Salon | San Jose, CA" />
      <div className={classes.PmuTitleContainer}>
        <Typography variant="h4" component="h2" className={classes.PmuTitle}>
          Permanent Makeup Guidelines
        </Typography>
      </div>
      <div className={classes.PmuContainer}>
        <AppBar position="static" className={classes.PmuAppBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Disqualifications" {...a11yProps(0)} />
            <Tab label="Before Treatment" {...a11yProps(1)} />
            <Tab label="After Treatment" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Disqualifications />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BeforeTreatment />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AfterTreatment />
        </TabPanel>
      </div>
    </div>
  );
};

export default PmuPage;
