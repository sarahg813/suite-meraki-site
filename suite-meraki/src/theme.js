import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff"
    }
  },
  typography: {
    fontFamily: '"Raboto Condensed", "Artifika", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
  button: {
    color: "#ffffff"
  }
});

export default theme;
