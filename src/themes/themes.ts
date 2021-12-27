import { createTheme, Theme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./custom";

const themes = {
  light: createTheme({ ...lightTheme }) as Theme,
  dark: createTheme({ ...darkTheme }) as Theme,
};

export default themes;
