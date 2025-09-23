import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#e5da00ff',
    },
    secondary: {
      main: '#ffffffff',
    }, 
  }, 
  typography: {
    fontFamily: 'Segae UI',
  }
});

export default theme;