import React from "react";

const Header = () => {
  return (
    <div id="header" className="layout">
      <div className="pl-100">
        <div>
          <h1 className="mb-8 h-30" data-aos="fade-right">
            miyu
          </h1>
          <h1 className="pl-200" data-aos="fade-right" data-aos-delay="100">
            setoyama
          </h1>
        </div>
        <ul className="tracking-wider text-xs md:text-base pl-200 pt-10">
          <li data-aos="fade-up" data-aos-delay="100">
            Front End Developer
          </li>
          <li data-aos="fade-up" data-aos-delay="100">
            Base in Vancouver. Born in Japan.
          </li>
        </ul>
      </div>
      <div
        id="line"
        className="scroll -bottom-10 left-300"
        data-aos="fade-up"
        data-aos-offset="-300"
      ></div>
    </div>
  );
};

export default Header;
