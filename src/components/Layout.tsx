import React, { ReactNode } from "react";
import { MainLayoutRoot, MainLayoutWrapper } from "../styles/layoutStyled";
import Footer from "./Footer";
import Navbar from "./Navbar";
//import MainNavbar from './MainNavbar'
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "@mui/material";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <MainLayoutRoot>
      <Navbar />
      <MainLayoutWrapper>{children}</MainLayoutWrapper>
      <Footer />
    </MainLayoutRoot>
  );
};

export default Layout;
