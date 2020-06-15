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
import { TitleComponent } from "../tools/TitleComponent";
import { makeupServices } from "../../data/ServicesData";

const useStyles = makeStyles((theme) => ({
  eyebrowMenuRoot: {
    width: "100%",
  },
  eyebrowMenuContainer: {
    margin: "2rem auto 2rem auto",
    width: "75vw",
    height: "auto",
  },
  eyebrowMenuTitle: {
    color: "white",
  },
  eyebrowMenuTitleContainer: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
  paper: {
    height: "fit-content",
    backgroundColor: "transparent",
  },
  table: {
    width: "100%",
  },
  priceTableCell: {
    width: "15%",
    borderBottom: "none",
    fontFamily: "Roboto Condensed",
    color: "white",
    fontSize: "1.02rem",
  },
  serviceTableCell: {
    width: "85%",
    borderBottom: "none",
    fontFamily: "Roboto Condensed",
    color: "white",
    fontSize: "1.02rem",
  },
  tableHead: {
    color: "white",
  },
}));

const EyebrowServicesPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.eyebrowMenuRoot}>
      <TitleComponent title="Eyebrows &amp; More Menu | Suite Meraki&#8482; | Hair &amp; Beauty Salon | San Jose, CA" />
      <div className={classes.eyebrowMenuTitleContainer}>
        <Typography variant="h3" className={classes.eyebrowMenuTitle}>
          Eyebrows &amp; More Menu
        </Typography>
      </div>
      <div className={classes.eyebrowMenuContainer}>
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
                          className={classes.serviceTableCell}
                        >
                          {svc.service}
                        </TableCell>
                        <TableCell
                          align="left"
                          className={classes.priceTableCell}
                        >
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
    </div>
  );
};

export default EyebrowServicesPage;
