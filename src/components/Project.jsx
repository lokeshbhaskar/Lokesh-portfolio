import React from "react";

const Project = () => {
  return (
    <div className="flex  flex-col gap-5 h-[70vh] mt-24 md:mt-0">
      <h1 className="md:hidden text-2xl text-center font-medium mt-5" >Projects</h1>
      <div className="flex flex-col bg-white shadow-2xl p-4 rounded-lg md:mt-12 ">
        <h1 className="text-xl font-semibold">
          Resume Analyzer{" "}
          <a
            href="https://resume-analyzer-chi.vercel.app/"
            className="text-blue-300"
          >
            (check)
          </a>
        </h1>
        <p className="text-sm font-medium">
          Developed an ATS-powered Resume Analyzer that evaluates resumes based
          on job-specific criteria, providing an ATS score and detailed feedback
        </p>
      </div>
      <div className="flex flex-col bg-white shadow-2xl p-4 rounded-lg  ">
        <h1 className="text-xl font-semibold">
          Apple 3D Website{" "}
          <a
            href="https://apple-website-taupe-pi.vercel.app/"
            className="text-blue-300 "
          >
            (check)
          </a>
        </h1>
        <p className="text-sm font-medium">
          Developed an interactive Apple 3D website using React, GSAP, and
          Three.js to create smooth animations and immersive user experiences.
          Implemented dynamic scrolling, 3D object interactions, and responsive
          design for seamless performance.
        </p>
      </div>
    </div>
  );
};

export default Project;
