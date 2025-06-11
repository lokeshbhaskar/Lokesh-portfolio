import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="flex  flex-col gap-0 h-[90vh] mt-24 md:mt-0">
      <h1 className="md:hidden text-2xl text-center font-medium mt-5">
        Projects
      </h1>
      <div className="flex flex-col bg-white shadow-2xl p-4 rounded-lg  ">
        <h1 className="text-xl font-semibold">
          Task Manager{" "}
          <a
            href="https://github.com/lokeshbhaskar/Task-Manager"
            className="text-blue-300 "
          >
            (check)
          </a>
        </h1>
        <p className="text-sm font-medium tracking-wider">
          Task Manager is a full-stack web application designed to help users
          efficiently manage their daily tasks, track progress, and stay
          organized. The app features user authentication, task CRUD operations,
          and real-time UI updates — all built using the MERN stack (MongoDB,
          Express.js, React.js, Node.js).
        </p>
      </div>
      <div className="flex flex-col bg-white shadow-2xl p-4 rounded-lg md:mt-2 lg:mt-16 ">
        <h1 className="text-xl font-semibold">
          Resume Analyzer{" "}
          <a
            href="https://resume-analyzer-chi.vercel.app/"
            className="text-blue-300"
          >
            (check)
          </a>
        </h1>
        <p className="text-sm font-medium tracking-wider ">
          Developed an ATS-powered Resume Analyzer that evaluates resumes based
          on job-specific criteria, providing an ATS score and detailed feedback
        </p>
      </div>
    </div>
  );
};

export default Project;
