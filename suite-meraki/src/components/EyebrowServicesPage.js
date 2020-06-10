import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { makeupServices } from "../data/ServicesData";

const useStyles = makeStyles((theme) => ({
  eyebrowServices: {
    margin: "2rem auto 2rem auto",
    width: "75vw",
    height: "auto",
  },
  paper: {
    height: "fit-content",
    backgroundColor: "transparent",
  },
  table: {
    width: "100%",
  },
  cell: {
    width: "15%",
    borderBottom: "none",
    fontFamily: "Roboto Condensed",
    color: "white",
    fontSize: "1rem",
  },
  serviceCell: {
    width: "85%",
    borderBottom: "none",
    fontFamily: "Roboto Condensed",
    color: "white",
    fontSize: "1rem",
  },
  tableHead: {
    color: "white",
  },
}));

const EyebrowServicesPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.eyebrowServices}>
      <Grid container direction="row" spacing={3} justify="space-between">
        <Grid container direction="column" xs={12} sm={6} spacing={3}>
          <Grid item>
            <Paper className={classes.paper}>
              <Table
                className={classes.table}
                aria-label="makeup table"
                size="small"
              >
                <TableHead>
                  <TableRow>
                    <Typography variant="h5" className={classes.tableHead}>
                      Permanent Makeup
                    </Typography>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {makeupServices.map((svc) => (
                    <TableRow key={svc.service}>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.serviceCell}
                      >
                        {svc.service}
                      </TableCell>
                      <TableCell align="left" className={classes.cell}>
                        {svc.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default EyebrowServicesPage;
