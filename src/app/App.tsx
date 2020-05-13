import { Box, CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { getTheme } from "services/theme";
import Footer from "./Footer";
import Routes from "./Routes";

function App() {
  const theme = getTheme();

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
          <Box
            component="main"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            minHeight="100vh">
            <Routes />
            <Footer />
          </Box>
        </BrowserRouter>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
