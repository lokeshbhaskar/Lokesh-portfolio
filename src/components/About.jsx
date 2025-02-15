import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

const About = () => {
  return (
    <div className="h-[70vh] flex flex-col">
      <div id="about">
        <div>
          <div className="flex justify-center items-center px-6 py-8 md:gap-2 lg:gap-6 ">
            <img
              src={"./lokesh.jpg"}
              alt=""
              className="w-[45px] lg:w-[45px] rounded-full  lg:mt-8 "
            />
            <h1 className="text-black font-semibold md:text-xl lg:text-xl lg:mt-8">
              Frontend Developer
            </h1>
          </div>
          <p className="text-center p-4  lg:p-0  lg:text-sm md:mt-[-8vh] lg:mt-4  tracking-wide">
            Hi, I'm Lokesh, a frontend developer passionate about building
            interactive and responsive websites. I specialize in React.js,
            Tailwind CSS, Framer motion and GSAP for animations, focusing on
            creating smooth user experiences.
          </p>
          <div className="lg:flex lg:gap-3 md:gap-3 gap-3  px-4 lg:mt-12 grid grid-cols-3 justify-items-center align-items-center ">
            <div className="relative bg-white p-3 rounded-full shadow-lg flex items-center justify-center w-16 h-16  md:w-12 md:h-12 lg:w-13  lg:h-13 ">
              <IoLogoJavascript
                className="absolute"
                style={{ color: "yellow", backgroundColor: "black" }}
                size={25}
              />
            </div>
            <div className="relative bg-white p-3 rounded-full shadow-lg flex items-center justify-center w-16 h-16 md:w-12 md:h-12 lg:w-13  lg:h-13 ">
              <FaReact
                className="absolute"
                style={{ color: "#00FFFF" }}
                size={25}
              />
            </div>
            <div className="relative bg-white p-3 rounded-full shadow-lg flex items-center justify-center w-16 h-16 md:w-12 md:h-12 lg:w-13  lg:h-13">
              <RiTailwindCssFill
                className="absolute"
                style={{ color: "#00BCFF" }}
                size={25}
              />
            </div>
            <div className="relative bg-white p-3 rounded-full shadow-lg flex items-center justify-center w-16 h-16 md:w-12 md:h-12 lg:w-13  lg:h-13">
              <FaGithub size={25} className="absolute" />
            </div>
            <div className="relative  bg-white p-3 rounded-full shadow-lg flex items-center justify-center w-16 h-16 md:w-12 md:h-12 lg:w-13  lg:h-13">
              <FaHtml5
                className="absolute"
                size={25}
                style={{ color: "orange" }}
              />
            </div>
            <div className="relative bg-white p-3 rounded-full shadow-lg flex items-center justify-center w-16 h-16 md:w-12 md:h-12 lg:w-13  lg:h-13">
              <FaCss3
                className="absolute"
                style={{ color: "blue" }}
                size={25}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
