import React from "react";

import { IconButton, Tooltip, useTheme } from "@mui/material";
import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material";
import { isDarkModeVar } from "../../apollo/cache";
import { useReactiveVar } from "@apollo/client";

export default function Mode() {
  const theme = useTheme();
  const isDarkMode = useReactiveVar(isDarkModeVar);

  const handleChange = () => {
    isDarkModeVar(!isDarkMode);
  };
  React.useEffect(() => {
    localStorage.setItem("mode", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  return (
    <Tooltip
      sx={{ ml: 1 }}
      title={`${
        theme.palette.mode === "dark" ? "To light mode" : "To dark mode"
      }`}
    >
      <IconButton onClick={handleChange} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Tooltip>
  );
}
