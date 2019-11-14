import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ColorTable from "./ColorTable";
import HaircutTable from "./HaircutTable";
import StylingTable from "./StylingTable";
import ExtensionsTable from "./ExtensionsTable";
import WeddingTable from "./WeddingTable";
import WaxTable from "./WaxTable";

const useStyles = makeStyles(theme => ({
  hairservices: {
    display: "flex",
    width: "100vw",
    height: "auto"
  }
}));

const HairServices = () => {
  const classes = useStyles();
  return (
    <div className={classes.hairservices}>
      <Grid container>
        <Grid item sm={3}>
          <ColorTable />
        </Grid>
        <Grid item sm={3}>
          <HaircutTable />
        </Grid>
        <Grid item sm={3}>
          <StylingTable />
        </Grid>
        <Grid item sm={3}>
          <WaxTable />
        </Grid>

        <Grid item sm={6}>
          <ExtensionsTable />
        </Grid>
        <Grid item sm={6}>
          <WeddingTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default HairServices;
