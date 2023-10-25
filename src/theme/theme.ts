import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6f5243",
    },
    secondary: {
      main: "#a30200",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    //fontFamily: "catamaran-semiBold",
    button: {
      textTransform: "none",
      fontWeight: 500,
      textDecoration: "none",
    },
  },
});

export default theme;
