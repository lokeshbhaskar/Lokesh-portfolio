import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Project from "./Project";
import Footer from "./Footer";
import RightNav from "./RightNav";
import Skills from "./Skills";

const Middle = () => {
  const [bgColor, setBgColor] = useState("bg-white");
  const [bgColor2, setBgColor2] = useState("bg-white");
  const [bgColor3, setBgColor3] = useState("bg-white");
  const [status, setStatus] = useState("About");

  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);

  
  useEffect(() => {
    const scrollContainer = document.getElementById("left-container");

    const handleScroll = () => {
      if (!scrollContainer) return;

      const scrollY = scrollContainer.scrollTop; // Always track left-container scroll
      console.log("ScrollY:", scrollY, "Screen Width:", window.innerWidth);

      const aboutHeight = window.innerHeight * 0.7;
      const projectHeight = window.innerHeight * 0.7;
      const skillHeight = window.innerHeight * 0.6;

      if (scrollY < aboutHeight) {
        setBgColor("bg-[#E2E8F0]");
        setBgColor2("bg-white");
        setBgColor3("bg-white");
        setStatus("About");
      } else if (scrollY >= aboutHeight && scrollY < aboutHeight + projectHeight) {
        setBgColor("bg-white");
        setBgColor2("bg-[#E2E8F0]");
        setBgColor3("bg-white");
        setStatus("Project");
      } else if (scrollY >= aboutHeight + projectHeight && scrollY < aboutHeight + projectHeight + skillHeight) {
        setBgColor("bg-white");
        setBgColor2("bg-white");
        setBgColor3("bg-[#E2E8F0]");
        setStatus("Skills");
      } else {
        setBgColor("bg-white");
        setBgColor2("bg-white");
        setStatus("Footer");
      }
    };

    const handleResize = () => {
      handleScroll(); // Recalculate on resize
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full md:w-[55vw] lg:w-[80vw] bg-[#F1F5F9] relative">
      {/* Navbar Fixed at the Center on Top of Middle (50vw) */}
      <div className="absolute top-2 left-[25vw] transform -translate-x-1/2 w-[40vw] flex justify-center bg-white shadow-md py-1 z-10 rounded-full">
        <Navbar status={status} />
        {console.log(status)}
      </div>

      <div className="flex gap-4 mt-16">
        {/* Left Scrollable Container (50vw) */}
        <div
          id="left-container"
          className="w-[70vw] md:w-[70vw] lg:w-[60vw] h-[70vh] overflow-y-scroll p-6 bg-[#E2E8F0]"
        >
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={projectRef}>
            <Project />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <Footer />
        </div>

        {/* Right Fixed Container (20vw) */}
        <div
          className={`w-[10vw] h-[70vh] flex items-center justify-center transition-all duration-500`}
        >
          <RightNav
            bgColor={bgColor}
            bgColor2={bgColor2}
            bgColor3={bgColor3}
            aboutRef={aboutRef}
            projectRef={projectRef}
            skillsRef={skillsRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Middle;
