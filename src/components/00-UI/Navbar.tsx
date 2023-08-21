import React from "react";

const menus = [
  { link: "#about", text: "WHO I AM" },
  { link: "#works", text: "WORKS" },
  { link: "#footer", text: "CONTACT" },
];

const ListItem = menus.map((menu, index) => {
  return (
    <li className="nav" key={index}>
      <a href={menu.link} key={index}>
        {menu.text}
      </a>
    </li>
  );
});

const Navbar = () => {
  return (
    <div
      className="fixed z-50 text-left bottom-0 left-0 mb-12 ml-12"
      data-aos="fade-right"
    >
      <nav className="lg:w-15 all:hidden lg:block">
        <ul className="cursor-pointer">{ListItem}</ul>
        <hr className="w-8 my-4 text-gy" />
        <ul>
          <a
            href="https://github.com/Smiyu-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="nav cursor-pointer">Github</li>
          </a>
          <a
            href="https://www.linkedin.com/in/miyu-setoyama-35789219a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="nav cursor-pointer">LinkedIn</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
