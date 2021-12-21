import { experimentalStyled } from "@mui/material";

export const FlexColumnCenter = experimentalStyled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
export const FlexStyle = experimentalStyled("div")(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    alignItems: "start",
  },
}));
