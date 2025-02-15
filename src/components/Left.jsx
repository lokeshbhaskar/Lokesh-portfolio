import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Left = () => {
  return (
    <div className="h-[85vh] w-full md:w-[25vw] lg:w-[20vw] bg-[#E2E8F0]  rounded-md px-2">
      <div className="flex justify-evenly items-center gap-1  ">
        <img
          src="https://wallpapers.com/images/hd/best-profile-pictures-xrona5c4apl7qvrj.jpg"
          alt="profile"
          className="w-24 md:w-20 lg:w-24 mt-4 object-contain rounded-xl "
        />
        <div className="flex flex-col md:gap-1 lg:gap-2 md:mt-1">
          <div className="bg-white md:p-3 lg:p-2 rounded-full shadow-lg flex justify-center  ">
            <a href="http://www.instagram.com/lokesh_01________/">
              <FaInstagram className="md:text-sm lg:text-xl bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5] rounded-md cursor-pointer" />
            </a>
          </div>

          <div className="bg-white md:p-3 lg:p-2 rounded-full shadow-lg flex justify-center">
            <a href="https://github.com/lokeshbhaskar">
              <FaGithub className="md:text-sm lg:text-xl rounded-3xl text-white bg-black cursor-pointer" />
            </a>
          </div>
          <div className="bg-white md:p-3 lg:p-2 rounded-full shadow-lg flex justify-center">
            <a href="https://www.linkedin.com/in/lokesh-kumar-3369a8219/">
              <FaLinkedin className=" md:text-sm lg:text-xl bg-white text-[#0A66C2] cursor-pointer rounded-sm " />
            </a>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-black text-lg font-semibold mt-4  ">
          Lokesh
        </h1>
        <p className="text-[13px] mt-5 text-black  text-center">
          I am a web developer skilled in React, JavaScript.I focus on building
          responsive, user-friendly websites.
        </p>
      </div>
      <div className="flex justify-between mt-5 p-2 items-center rounded-md hover:shadow-2xl bg-[#dcdde1]">
        <div>
          <h1 className="text-black font-semibold text-sm">B.Tech</h1>
          <h1 className="text-[13px]  text-black ">
            {" "}
            JMS Institute Of Technology{" "}
          </h1>
        </div>
        <div>
          <p className="text-[13px] text-black font-bold ">7.3</p>
        </div>
      </div>
      <div className="flex justify-between mt-4 p-2 items-center rounded-md hover:shadow-2xl bg-[#dcdde1] ">
        <div>
          <h1 className="text-black text-[13px] font-semibold ">
            Intermediate
          </h1>
          <h1 className="text-[13px] text-black  "> Siwan </h1>
        </div>
        <div>
          <p className="text-sm font-bold text-black ">78%</p>
        </div>
      </div>
    </div>
  );
};

export default Left;
