import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import { orange } from "@mui/material/colors";

export const GetInTouchArrow = styled("div")(({}) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "orange",
}));
export const ImageMargin = styled("div")(({ theme }) => ({
  marginLeft: "0",
  [theme.breakpoints.up("sm")]: {
    // zIndex: '-10',
    marginLeft: "-10rem",
  },
}));
export const StyledListItemButton = styled(ListItemButton)<ListItemButtonProps>(
  ({ theme }) => ({
    //color: 'white',
    color: theme.palette.getContrastText(theme.palette.primary.light),
    fontSize: "1rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
    },
    fontWeight: "bold",

    "&:hover": {
      color: "white",
    },
  })
);
export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  //color: 'white',
  color: theme.palette.getContrastText(theme.palette.secondary.light),
  fontSize: "1rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
  fontWeight: "bold",

  "&:hover": {
    color: "white",
  },
}));
export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: "white",
  borderColor: orange[600],
  "&:hover": {
    backgroundColor: "white",
    borderColor: orange[900],
  },
  borderRadius: "32px",
  width: "200px",
  height: "48px",
  fontSize: "1rem",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "space-between",
  // border: '0.55rem solid white',
  // animation: 'pulse-border 1.5s linear infinite',
  // animationDelay: '1.5s',
  // '@keyframes pulse-border': {
  //   '0%': {
  //     transform: 'scale(1)',
  //     opacity: 1,
  //   },
  //   '50%': {
  //     transform: 'scale(1.2)',
  //     opacity: 1,
  //   },
  //   '100%': {
  //     transform: 'scale(1.5)',
  //     opacity: 0,
  //   },
  // },
}));
