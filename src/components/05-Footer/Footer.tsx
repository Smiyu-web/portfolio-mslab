import React from "react";
import TopArrow from "./TopArrow";

const Footer = () => {
  return (
    <footer id="footer" className="layout">
      <TopArrow />
      <div>
        <h6
          className="absolute inset-0 m-auto text-center top-1/2 text-bg"
          data-aos="fade-up"
        >
          <a href="mailto:miyusetoyama@gmail.com">miyusetoyama@gmail.com</a>
        </h6>
      </div>
      <p className="text-bg absolute right-8 bottom-8">
        &copy;2021 miyusetoyama
      </p>
    </footer>
  );
};

export default Footer;
