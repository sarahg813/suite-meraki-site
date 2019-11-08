import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "30%",
    height: "auto"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: "30%",
    height: "auto"
  }
}));

function createData(name, price) {
  return { name, price };
}

const rows = [
  createData("Balayage", "$205+"),
  createData("Babylight/Balayage", "$300+"),
  createData("Bleach and Tone", "$500"),
  createData("Full color ", "$80+"),
  createData("Ombré", "$185+"),
  createData("Partial Highlights", "$90+"),
  createData("Full Highlights", "$150+"),
  createData("Root Touch Up", "$60+"),
  createData("Color Correction", "$250+"),
  createData("Glaze", "$50+"),
  createData("Toner", "$55+"),
  createData("REPEAT", "$205+"),
  createData("Babylight/Balayage", "$300+"),
  createData("Bleach and Tone", "$500"),
  createData("Full color ", "$80+"),
  createData("Ombré", "$185+"),
  createData("Partial Highlights", "$90+"),
  createData("Full Highlights", "$150+"),
  createData("Root Touch Up", "$60+"),
  createData("Color Correction", "$250+"),
  createData("Glaze", "$50+"),
  createData("Toner", "$55+")
];

export default function ColorTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="Color table">
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
