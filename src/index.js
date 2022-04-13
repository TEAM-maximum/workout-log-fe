import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import reportWebVitals from "./reportWebVitals";
import "./static/fonts/fonts.css";

import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Hahmlet',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <AppRouter />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
