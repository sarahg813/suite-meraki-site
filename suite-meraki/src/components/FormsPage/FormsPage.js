import React from "react";
import PropTypes from "prop-types";
import { AppBar, Box, Typography, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TitleComponent } from "../tools/TitleComponent";
import CovidWaiverForm from "./CovidWaiverForm";
import MedicalHistoryForm from "./MedicalHistoryForm";

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
        <Box style={{ backgroundColor: "#fafafa" }}>{children}</Box>
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
  root: {
    width: "100%",
  },
  container: {
    margin: "2rem auto 2rem auto",
    width: "75vw",
    height: "auto",
    "@media (max-width: 767px)": {
      margin: 0,
      width: "90vw",
    },
  },
  title: {
    color: "white",
    fontFamily: "Arapey",
  },
  titleContainer: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
  AppBar: {
    backgroundColor: "black",
    color: "white",
    marginBottom: "1rem",
  },
}));

const FormsPage = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TitleComponent title="Forms | Suite Meraki&#174; | Hair &amp; Beauty Salon | San Jose, CA" />
      <div className={classes.titleContainer}>
        <Typography variant="h4" component="h2" className={classes.title}>
          Forms
        </Typography>
      </div>
      <div className={classes.container}>
        <AppBar position="static" className={classes.AppBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="COVID-19 Liability Waiver" {...a11yProps(0)} />
            <Tab label="Client Medical History Form" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <CovidWaiverForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MedicalHistoryForm />
        </TabPanel>
      </div>
    </div>
  );
};

export default FormsPage;
