import { PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";
import tinycolor from "tinycolor2";
import typography from "./typography";

const primary = "#008000";
const secondary = "#FFA500";
const warning = "#FFC260";
const success = "#2e7d32";
const info = "#9013FE";

//const lightenRate = 7.5;
const darkenRate = 15;

export const lightTheme = {
  palette: {
    mode: "light" as PaletteMode,
    primary: { main: primary },
    secondary: { main: secondary },
    warning: { main: warning },
    success: { main: success },
    info: { main: info },
    background: {
      default: `linear-gradient(to right, ${primary} 30%, ${secondary} 90%)`,
      paper: `linear-gradient(to bottom, ${secondary} 30%, ${primary} 90%)`,
    },
    text: {
      primary: "#4A4A4A",
      secondary: "#6E6E6E",
    },
  },
  typography: { ...typography },
};
const darkPrimary = tinycolor(primary).darken(darkenRate).toHexString();
const darkSecondary = tinycolor(secondary).darken(darkenRate).toHexString();
export const darkTheme = {
  palette: {
    mode: "dark" as PaletteMode,
    primary: { main: darkPrimary },
    secondary: { main: darkSecondary },
    warning: { main: tinycolor(warning).darken(darkenRate).toHexString() },
    success: { main: tinycolor(success).darken(darkenRate).toHexString() },
    info: { main: tinycolor(info).darken(darkenRate).toHexString() },
    background: {
      default: `linear-gradient(to right, ${darkPrimary} 30%, ${darkSecondary} 90%)`,
      paper: `linear-gradient(to bottom, ${darkSecondary} 30%, ${darkPrimary} 90%)`,
      // default: "#121212",
      // paper: "#121212",
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
  typography: { ...typography },
};

// const defaultTheme = {
//   palette: {
//     primary: {
//       main: primary,
//       light: tinycolor(primary).lighten(lightenRate).toHexString(),
//       dark: tinycolor(primary).darken(darkenRate).toHexString(),
//     },
//     secondary: {
//       main: secondary,
//       light: tinycolor(secondary).lighten(lightenRate).toHexString(),
//       dark: tinycolor(secondary).darken(darkenRate).toHexString(),
//       contrastText: "#FFFFFF",
//     },
//     warning: {
//       main: warning,
//       light: tinycolor(warning).lighten(lightenRate).toHexString(),
//       dark: tinycolor(warning).darken(darkenRate).toHexString(),
//     },
//     success: {
//       main: success,
//       light: tinycolor(success).lighten(lightenRate).toHexString(),
//       dark: tinycolor(success).darken(darkenRate).toHexString(),
//     },
//     info: {
//       main: info,
//       light: tinycolor(info).lighten(lightenRate).toHexString(),
//       dark: tinycolor(info).darken(darkenRate).toHexString(),
//     },
//     text: {
//       primary: "#4A4A4A",
//       secondary: "#fff",
//       hint: "#B9B9B9",
//     },
//     background: {
//       default: `linear-gradient(to right, ${primary} 30%, ${secondary} 90%)`,
//       paper: `linear-gradient(to bottom, ${secondary} 30%, ${primary} 90%)`,
//     },
//   },
//   typography: { ...typography },

// };

// export default defaultTheme;
