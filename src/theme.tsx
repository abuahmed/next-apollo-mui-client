import { createTheme } from "@mui/material/styles";
import defaultTheme from "./default";
//import typography from './typography';

// const overrides = {
//   typography: typography,
// };
// const overrides = {
//   typography: {
//     h1: {
//       fontSize: '3rem',
//     },
//     h2: {
//       fontSize: '2rem',
//     },
//     h3: {
//       fontSize: '1.64rem',
//     },
//     h4: {
//       fontSize: '1.5rem',
//     },
//     h5: {
//       fontSize: '1.285rem',
//     },
//     h6: {
//       fontSize: '1.142rem',
//     },
//   },
// };
let theme = createTheme({ ...defaultTheme }); //{ ...defaultTheme, ...overrides });
// theme.typography.h1 = {
//   fontSize: '2rem',
//   [theme.breakpoints.up('sm')]: {
//     fontSize: '2.4rem',
//   },
// };
//console.log(theme);
//theme.typography = typography;
// const themes = {
//   default: createTheme({ ...defaultTheme, ...overrides }),
// };
// let theme = createTheme(defaultTheme);
// theme = responsiveFontSizes(theme);
export default theme;
