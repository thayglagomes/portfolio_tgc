import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#292929ff',
    },
    secondary: {
      main: '#f8dc0bff',
    }, 
  }, 
  typography: {
    fontFamily: 'Segae UI',
  }
});
// Muda o tamanho da fonte de acordo com o tamanho da tela
// a função foi para let e não const para poder ser reatribuída
theme = responsiveFontSizes(theme);
export default theme;