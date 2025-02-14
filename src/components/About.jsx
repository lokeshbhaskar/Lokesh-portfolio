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
          <div className="flex items-center gap-6 ">
            <img
              src={"./lokesh.jpg"}
              alt=""
              className="w-[45px] rounded-full mt-8 "
            />
            <h1 className="text-black font-semibold mt-8 ">Developer..</h1>
          </div>
          <p className="p-4 md:p-0 text-sm mt-4 font-semibold">
            Hi, I'm Lokesh, a frontend developer passionate about building
            interactive and responsive websites. I specialize in
            React.js, Tailwind CSS, Framer motion and GSAP for animations, focusing on
            creating smooth user experiences.
          </p>
          <div className="md:flex gap-3 px-4 mt-10 grid grid-cols-3  ">
            <div className="relative bg-white p-3 rounded-full shadow-lg flex items-center justify-center w-16 md:w-20 lg:w-13 h-16 md:h-20 lg:h-13 "  >
              <IoLogoJavascript
              className="absolute"
                style={{ color: "yellow", backgroundColor: "black" }}
                 size={25}
              />
            </div>
            <div className="relative bg-white p-3 rounded-full shadow-lg flex items-center justify-center w-16 md:w-20 lg:w-13 h-16 md:h-20 lg:h-13 ">
              <FaReact className="absolute" style={{ color: "#00FFFF" }} size={25} />
            </div>
            <div className="relative bg-white p-3 rounded-full shadow-lg flex items-center justify-center w-16 md:w-20 lg:w-13 h-16 md:h-20 lg:h-13">
              <RiTailwindCssFill className="absolute" style={{ color: "#00BCFF" }} size={25} />
            </div>
            <div className="relative bg-white p-3 rounded-full shadow-lg flex items-center justify-center w-16 md:w-20 lg:w-13 h-16 md:h-20 lg:h-13">
              <FaGithub size={25} className="absolute" />
            </div>
            <div className="relative  bg-white p-3 rounded-full shadow-lg flex items-center justify-center w-16 md:w-20 lg:w-13 h-16 md:h-20 lg:h-13">
              <FaHtml5 className="absolute" size={25} style={{ color: "orange" }} />
            </div>
            <div className="relative bg-white p-3 rounded-full shadow-lg flex items-center justify-center w-16 md:w-20 lg:w-13 h-16 md:h-20 lg:h-13">
              <FaCss3 className="absolute" style={{ color: "blue" }} size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
