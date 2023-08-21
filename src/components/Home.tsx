import React from "react";

import HamburgerMenu from "./00-UI/Hamburger/HamburgerMenu";
import Navbar from "./00-UI/Navbar";
import Header from "./01-Header/Header";
import About from "./02-About/About";
import Works from "./03-Works/Works";
import Footer from "./05-Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HamburgerMenu />
      {/* <Header /> */}
      <About />
      <Works />
      <Footer />
    </div>
  );
};

export default Home;
