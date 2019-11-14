import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Typography
} from "@material-ui/core";
import { extensionsServices } from "./ServicesData";

const useStyles = makeStyles(theme => ({
  root: {
    width: "25%",
    height: "fit-content",
    backgroundColor: "transparent"
  },
  table: {
    minWidth: "30%"
  },
  cell: {
    borderBottom: "none",
    fontFamily: "Roboto Condensed",
    color: "white"
  },
  tablehead: {
    color: "white"
  }
}));

export default function ExtensionsTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table
        className={classes.table}
        aria-label="extensions table"
        size="small"
      >
        <TableHead>
          <TableRow>
            <Typography variant="h5" className={classes.tablehead}>
              Extensions
            </Typography>
          </TableRow>
        </TableHead>
        <TableBody>
          {extensionsServices.map(svc => (
            <TableRow key={svc.service}>
              <TableCell component="th" scope="row" className={classes.cell}>
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
  );
}
