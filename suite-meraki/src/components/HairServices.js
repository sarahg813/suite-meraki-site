import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ColorTable from "./ColorTable";

const useStyles = makeStyles(theme => ({
  home: {
    alignItems: "center",
    flexGrow: "1"
  },
  title: {
    fontFamily: "Petit Formal Script",
    color: theme.palette.primary.main,
    fontWeight: 500
  }
}));

const HairServices = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ColorTable />
    </React.Fragment>
  );
};

export default HairServices;
