import React from "react";
import PropTypes from "prop-types";
import { AppBar, Box, Typography, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TitleComponent } from "../tools/TitleComponent";
import BeforeTreatment from "./BeforeTreatment";
import AfterTreatment from "./AfterTreatment";

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
  microbladingRoot: {
    width: "100%",
  },
  microbladingContainer: {
    margin: "2rem auto 2rem auto",
    width: "75vw",
    height: "auto",
    "@media (max-width: 767px)": {
      margin: 0,
      width: "90vw",
    },
  },
  microbladingTitle: {
    color: "white",
    fontFamily: "Arapey",
  },
  microbladingTitleContainer: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
  microbladingAppBar: {
    backgroundColor: "black",
    color: "white",
    marginBottom: "1rem",
  },
}));

const MicrobladingPage = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.microbladingRoot}>
      <TitleComponent title="Microblading Guidelines | Suite Meraki&#174; | Hair &amp; Beauty Salon | San Jose, CA" />
      <div className={classes.microbladingTitleContainer}>
        <Typography
          variant="h4"
          component="h2"
          className={classes.microbladingTitle}
        >
          Microblading Guidelines
        </Typography>
      </div>
      <div className={classes.microbladingContainer}>
        <AppBar position="static" className={classes.microbladingAppBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Before Treatment" {...a11yProps(0)} />
            <Tab label="After Treatment" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <BeforeTreatment />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AfterTreatment />
        </TabPanel>
      </div>
    </div>
  );
};

export default MicrobladingPage;
