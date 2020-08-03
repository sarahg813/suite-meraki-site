import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Typography, Box, Container } from "@material-ui/core";
import { TitleComponent } from "../tools/TitleComponent";
import MedicalForm from "./MedicalForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  formsContainer: {
    flexGrow: 1,
    backgroundColor: "#0c0c0c",
    display: "flex",
    height: "75vh",
  },
  tabs: {
    borderRight: `1px solid white`,
    width: "15rem",
    color: "white",
  },
  title: {
    color: "white",
    fontFamily: "Arapey",
  },
  titleContainer: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
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
      <div className={classes.formsContainer}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Medical Form" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div>
            <MedicalForm />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </div>
    </div>
  );
};

export default FormsPage;
