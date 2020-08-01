import React from "react";
import { Typography, Paper, TextField } from "@material-ui/core";

const MedicalForm = () => {
  return (
    <div>
      <Paper>
        <form autoComplete="off">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Date of Birth"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Address" variant="outlined" />
          <TextField id="outlined-basic" label="City" variant="outlined" />
          <TextField id="outlined-basic" label="State" variant="outlined" />
          <TextField id="outlined-basic" label="Zip Code" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </form>
      </Paper>
    </div>
  );
};

export default MedicalForm;
