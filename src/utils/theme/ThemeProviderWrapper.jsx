/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { useContext, useMemo } from "react";
import { AccesibilityContext } from "../../contexts/AccesibilityContext";

export const theme = {
  palette: {
    primary: {
      main: "#a67c00",
    },
    secondary: {
      main: "#005f6a",
    },
    background: { main: "#f5f5f5" },
    text: {
      main: "#333",
    },
    white: "#ffffff",
  },
};
export default function ThemeProviderWrapper({ children }) {
  const { fontScale } = useContext(AccesibilityContext);
  const fontScaler = fontScale ? 1.7 : 1;
  // MUI THEME
  const muiTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        typography: {
          fontFamily: "Roboto",
          fontWeightRegular: 300,
          button: {
            textTransform: "none",
          },
          h1: {
            fontWeight: 700,
            fontSize: `${1.8 * fontScaler}rem`,
            marginBottom: "1rem",
          },
          h3: {
            fontWeight: 500,
            fontSize: `${0.9 * fontScaler}rem`,
          },
          h4: {
            fontWeight: 500,
            fontSize: `${1.6 * fontScaler}rem`,
          },
          h5: {
            fontWeight: 500,
            fontSize: `${1.3 * fontScaler}rem`,
          },
          h6: {
            fontWeight: 700,
            fontSize: `${1.1 * fontScaler}rem`,
          },
          body1: {
            fontWeight: 400,
            fontSize: `${1 * fontScaler}rem`,
          },
          caption: {
            fontFamily: "Work Sans",
            fontWeight: 300,
            fontSize: `${0.75 * fontScaler}rem`,
            marginY: 0,
          },
          label: {
            fontFamily: "Work Sans",
            fontWeight: 300,
            fontSize: `${0.9 * fontScaler}rem`,
          },
          error: {
            fontFamily: "Work Sans",
            fontWeight: 200,
            fontSize: `${0.9 * fontScaler}rem`,
            color: "#d32f2f",
          },
        },
      }),
    [fontScale]
  );
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
