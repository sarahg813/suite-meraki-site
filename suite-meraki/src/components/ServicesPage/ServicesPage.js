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
import {
  haircutServices,
  stylingServices,
  weddingServices,
  colorServices,
  extensionsServices,
  waxServices,
  makeupServices,
} from "../../data/ServicesData";

const useStyles = makeStyles((theme) => ({
  servicesRoot: {
    width: "100%",
  },
  servicesContainer: {
    margin: "2rem auto 2rem auto",
    width: "75vw",
    height: "auto",
  },
  servicesTitle: {
    color: "white",
    fontFamily: "Arapey",
  },
  servicesTitleContainer: {
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

    color: "white",
    fontSize: "1.02rem",
  },
  serviceTableCell: {
    width: "85%",
    borderBottom: "none",
    color: "white",
    fontSize: "1.02rem",
  },
  tableHead: {
    color: "white",
    fontSize: "1.5rem",
    fontFamily: "Arapey",
  },
}));

const ServicesPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.servicesRoot}>
      <TitleComponent title="Services | Suite Meraki&#174; | Hair &amp; Beauty Salon | San Jose, CA" />
      <div className={classes.servicesTitleContainer}>
        <Typography variant="h3" className={classes.servicesTitle}>
          Services Price List
        </Typography>
      </div>
      <div className={classes.servicesContainer}>
        <Grid container direction="row" spacing={3} justify="space-between">
          <Grid container direction="column" xs={12} sm={6} spacing={3}>
            <Grid item>
              <Paper elevation={0} className={classes.paper}>
                <Table
                  className={classes.table}
                  aria-label="haircut table"
                  size="small"
                >
                  <TableHead>
                    <TableRow>
                      <Typography className={classes.tableHead}>
                        Haircut
                      </Typography>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {haircutServices.map((svc) => (
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

            <Grid item>
              <Paper className={classes.paper}>
                <Table
                  className={classes.table}
                  aria-label="styling table"
                  size="small"
                >
                  <TableHead>
                    <TableRow>
                      <Typography className={classes.tableHead}>
                        Styling &amp; Treatments
                      </Typography>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {stylingServices.map((svc) => (
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

            <Grid item>
              <Paper className={classes.paper}>
                <Table
                  className={classes.table}
                  aria-label="Extensions table"
                  size="small"
                >
                  <TableHead>
                    <TableRow>
                      <Typography className={classes.tableHead}>
                        Extensions
                      </Typography>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {extensionsServices.map((svc) => (
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

            <Grid item>
              <Paper className={classes.paper}>
                <Table
                  className={classes.table}
                  aria-label="wedding table"
                  size="small"
                >
                  <TableHead>
                    <TableRow>
                      <Typography className={classes.tableHead}>
                        Wedding
                      </Typography>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {weddingServices.map((svc) => (
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
                      <Typography className={classes.tableHead}>
                        Color
                      </Typography>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {colorServices.map((svc) => (
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

            <Grid item>
              <Paper className={classes.paper}>
                <Table
                  className={classes.table}
                  aria-label="makeup table"
                  size="small"
                >
                  <TableHead>
                    <TableRow>
                      <Typography className={classes.tableHead}>
                        Eyelashes &amp; Eyebrows
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

            <Grid item>
              <Paper className={classes.paper}>
                <Table
                  className={classes.table}
                  aria-label="wax table"
                  size="small"
                >
                  <TableHead>
                    <TableRow>
                      <Typography className={classes.tableHead}>Wax</Typography>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {waxServices.map((svc) => (
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

export default ServicesPage;
