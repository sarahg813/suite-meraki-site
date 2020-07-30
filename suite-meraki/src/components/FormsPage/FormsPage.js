import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Typography, Box } from "@material-ui/core";
import { TitleComponent } from "../tools/TitleComponent";

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
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "75vh",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
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
  const initialState = {
    forms: [{ formName: "Medical" }, { formName: "History" }],
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const addForm = (form) => {
    dispatch({
      type: ADD_FORM,
      payload: form,
    });
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
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </div>
    </div>
  );
};

export default FormsPage;
