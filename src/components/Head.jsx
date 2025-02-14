import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Head = () => {
  return (
    <div className="p-10">
      <div className="flex  items-center justify-between">
        <h1 className="text-2xl font-bold">Lokesh</h1>
        <div className="flex flex-col gap-2 ">
          <div className="relative bg-white p-2 rounded-full shadow-lg flex justify-center items-center w-12 h-12 ">
            <a href="mailto:lokeshbhaskar28@gmail.com">
            <MdOutlineEmail className="absolute" style={{ color: "#D14836" }} />
            </a>
          </div>
          <div className="bg-white p-2 rounded-full shadow-lg flex justify-center items-center w-12 h-12 ">
            <a href="https://www.linkedin.com/in/lokesh-kumar-3369a8219/">
            <FaLinkedin className="text-xl bg-white text-[#0A66C2] cursor-pointer rounded-sm " />
            </a>
          </div>
          <div className="bg-white p-2 rounded-full shadow-lg flex justify-center items-center w-12 h-12  ">
            <a href="http://www.instagram.com/lokesh_01________/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5] rounded-md cursor-pointer " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
