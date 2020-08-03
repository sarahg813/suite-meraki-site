import React from "react";
import { Typography, Paper, TextField, Container } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    label: {
      color: "white",
    },
    "& .MuiFormLabel-root": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
  input: {
    color: "white",
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#0c0c0c",
    color: "white",
  },
}));

const MedicalForm = () => {
  const classes = useStyles();
  return (
    <Container>
      <Paper className={classes.paper}>
        <form autoComplete="off">
          <CssTextField
            className={classes.margin}
            label="Name"
            variant="outlined"
            id="custom-css-outlined-input"
            InputProps={{
              className: classes.input,
            }}
          />
        </form>
      </Paper>
    </Container>
  );
};

export default MedicalForm;
