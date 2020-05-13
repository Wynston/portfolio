import { responsiveFontSizes, createMuiTheme, ThemeOptions, Theme } from "@material-ui/core";
import { blue, blueGrey } from "@material-ui/core/colors";

const defaultFontFamily = [
  "Roboto",
  "Space-Mono",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
].join(",");

const headerFontFamily = [
  "Space-Mono",
  "Roboto",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
].join(",");

function options(): ThemeOptions {
  return {
    palette: {
      primary: blueGrey,
      secondary: blue,
      type: "dark"
    },
    typography: {
      fontFamily: defaultFontFamily,
      htmlFontSize: 14,
      h1: {
        fontFamily: headerFontFamily
      },
      h2: {
        fontFamily: headerFontFamily
      },
      h3: {
        fontFamily: headerFontFamily
      },
      h4: {
        fontFamily: headerFontFamily
      },
      h5: {
        fontFamily: headerFontFamily
      },
      h6: {
        fontFamily: headerFontFamily
      }
    }
  } as ThemeOptions;
}

export function getTheme(): Theme {
  return responsiveFontSizes(createMuiTheme(options()));
}
