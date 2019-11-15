import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  haircutServices,
  stylingServices,
  weddingServices,
  colorServices,
  extensionsServices,
  waxServices
} from "./ServicesData";

const useStyles = makeStyles(theme => ({
  hairServices: {
    margin: "auto",
    width: "75vw",
    height: "auto"
  },
  paper: {
    height: "fit-content",
    backgroundColor: "transparent"
  },
  table: {
    width: "100%"
  },
  cell: {
    width: "25%",
    borderBottom: "none",
    fontFamily: "Roboto Condensed",
    color: "white",
    fontSize: "1rem"
  },
  serviceCell: {
    width: "75%",
    borderBottom: "none",
    fontFamily: "Roboto Condensed",
    color: "white",
    fontSize: "1rem"
  },
  tableHead: {
    color: "white"
  }
}));

const HairServices = () => {
  const classes = useStyles();
  return (
    <div className={classes.hairServices}>
      <Grid container direction="row" justify="center">
        <Grid container direction="column" xs={12} sm={6} spacing={3}>
          <Grid item>
            <Paper className={classes.paper}>
              <Table
                className={classes.table}
                aria-label="haircut table"
                size="small"
              >
                <TableHead>
                  <TableRow>
                    <Typography variant="h5" className={classes.tableHead}>
                      Haircut
                    </Typography>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {haircutServices.map(svc => (
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
          <Grid item>
            <Paper className={classes.paper}>
              <Table
                className={classes.table}
                aria-label="styling table"
                size="small"
              >
                <TableHead>
                  <TableRow>
                    <Typography variant="h5" className={classes.tableHead}>
                      Styling &amp; Treatments
                    </Typography>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stylingServices.map(svc => (
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
          <Grid item>
            <Paper className={classes.paper}>
              <Table
                className={classes.table}
                aria-label="wedding table"
                size="small"
              >
                <TableHead>
                  <TableRow>
                    <Typography variant="h5" className={classes.tableHead}>
                      Wedding
                    </Typography>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {weddingServices.map(svc => (
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
        <Grid container direction="column" xs={12} sm={6} spacing={3}>
          <Grid item>
            <Paper className={classes.paper}>
              <Table
                className={classes.table}
                aria-label="Color table"
                size="small"
              >
                <TableHead>
                  <TableRow>
                    <Typography variant="h5" className={classes.tableHead}>
                      Color
                    </Typography>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {colorServices.map(svc => (
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
          <Grid item>
            <Paper className={classes.paper}>
              <Table
                className={classes.table}
                aria-label="extensions table"
                size="small"
              >
                <TableHead>
                  <TableRow>
                    <Typography variant="h5" className={classes.tableHead}>
                      Extensions
                    </Typography>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {extensionsServices.map(svc => (
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
          <Grid item>
            <Paper className={classes.paper}>
              <Table
                className={classes.table}
                aria-label="wax table"
                size="small"
              >
                <TableHead>
                  <TableRow>
                    <Typography variant="h5" className={classes.tableHead}>
                      Wax
                    </Typography>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {waxServices.map(svc => (
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

export default HairServices;
