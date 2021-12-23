import { Theme } from "@mui/material/styles";

declare module "@material-ui/styles" {
  interface DefaultTheme extends Theme {}
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}

declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}

declare module "react-facebook-login/dist/facebook-login-render-props";
