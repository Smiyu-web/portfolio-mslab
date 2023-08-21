import React from "react";
import Title from "../00-UI/Title";
import miyu from "/public/miyuBK.jpg";
import ViewTheResume from "./ViewTheResume";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="layout">
      <div>
        <Title no="01" title="who i am" />
        <div className="block md:flex flex-col items-center">
          <div
            className="text-sm font-light my-12 md:my-10 lg:my-16 mx-4 md:mx-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Miyu Setoyama is a passionate Frontend Developer who loves creating
            new things. Expert knowledge of HTML, CSS, JavaScript, and React.
            Familiar with Fullstack development, particularly the MERN stack.
          </div>
        </div>
        <ViewTheResume />
      </div>
      <div className="hidden md:block relative inset-0 m-auto">
        <div className="about_right about_rec" data-aos="fade-up"></div>
        <Image
          className="about_right about_img"
          src={miyu}
          alt="miyu"
          data-aos="fade-up"
          data-aos-delay="50"
        />
      </div>
    </div>
  );
};

export default About;
