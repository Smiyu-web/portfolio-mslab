import React from "react";
import { workProjects, myProjects } from "./projects";
import ViewTheProject from "./ViewTheProject";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="w-full mt-20">
      {workProjects.map((el, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index}>
              <div
                id="right"
                className="flex flex-col-reverse md:flex-row justify-between my-20 lg:mx-10"
              >
                <div className="flex flex-col ml-5">
                  <h3
                    className="font-meddon"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {el.title}
                  </h3>
                  <h4
                    className="font-extralight	text-gray-400 mt-5"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {el.about}
                  </h4>
                </div>
                <div
                  className="relative"
                  // onClick={() =>
                  //   history.push({
                  //     pathname: `workdetail/${el.id}`,
                  //     state: { id: `${el.id}` },
                  //   })
                  // }
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div id="img_bg" className="work_img_rec"></div>
                  <div className="mx-auto overflow-hidden">
                    <Image
                      src={el.image}
                      alt={el.title}
                      className="work_img_slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <div
                id="left"
                className="flex flex-col-reverse md:flex-row-reverse justify-between my-20 lg:mx-10"
              >
                <div className="flex flex-col justify-end pl-5 lg:pr-14">
                  <h4
                    className="font-meddon"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {el.title}
                  </h4>
                  <h4
                    className="font-extralight text-gray-400 mt-5"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {el.about}
                  </h4>
                </div>
                <div
                  className="relative"
                  // onClick={() =>
                  //   history.push({
                  //     pathname: `workdetail/${el.id}`,
                  //     state: { id: `${el.id}` },
                  //   })
                  // }
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div id="img_bg" className="work_img_rec"></div>
                  <div className="mx-auto overflow-hidden">
                    <Image
                      src={el.image}
                      alt={el.title}
                      className="work_img_slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
      {myProjects.map((el, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index}>
              <div
                id="left"
                className="flex flex-col-reverse md:flex-row-reverse justify-between my-20 lg:mx-10"
              >
                <div className="flex flex-col justify-end pl-5 lg:pr-14">
                  <h4
                    className="font-meddon"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {el.title}
                  </h4>
                  <h4
                    className="font-extralight text-gray-400 mt-5"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {el.type}
                  </h4>
                  <ViewTheProject id={el.id} />
                  <br />
                </div>
                <div
                  className="relative"
                  // onClick={() =>
                  //   history.push({
                  //     pathname: `workdetail/${el.id}`,
                  //     state: { id: `${el.id}` },
                  //   })
                  // }
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div id="img_bg" className="work_img_rec"></div>
                  <div className="mx-auto overflow-hidden">
                    <Image
                      src={el.image}
                      alt={el.title}
                      className="work_img_slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <div
                id="right"
                className="flex flex-col-reverse md:flex-row justify-between my-20 lg:mx-10"
              >
                <div className="flex flex-col ml-5">
                  <h4
                    className="font-meddon"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {el.title}
                  </h4>
                  <h4
                    className="font-extralight	text-gray-400 mt-5"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {el.type}
                  </h4>
                  <ViewTheProject id={el.id} />
                  <br />
                </div>
                <div
                  className="relative"
                  // onClick={() =>
                  //   history.push({
                  //     pathname: `workdetail/${el.id}`,
                  //     state: { id: `${el.id}` },
                  //   })
                  // }
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div id="img_bg" className="work_img_rec"></div>
                  <div className="mx-auto overflow-hidden">
                    <Image
                      src={el.image}
                      alt={el.title}
                      className="work_img_slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Slider;
