import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Left = () => {
  return (
    <div className=" w-[20vw]  bg-[#E2E8F0]  rounded-md px-2  ">
      <div className="flex justify-evenly items-center   ">
        {/* <img
          src="https://wallpapers.com/images/hd/best-profile-pictures-xrona5c4apl7qvrj.jpg"
          alt="profile"
          className="w-30  mt-4 object-contain rounded-xl "
        /> */}
        <div className="flex flex-col gap-3">
          <div className="bg-white p-2 rounded-full shadow-lg flex justify-center  ">
            <FaInstagram className="text-xl bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5] rounded-md cursor-pointer " />
          </div>
          <div className="bg-white p-2 rounded-full shadow-lg flex justify-center">
            <FaGithub className="text-xl rounded-3xl text-white bg-black cursor-pointer" />
          </div>
          <div className="bg-white p-2 rounded-full shadow-lg flex justify-center">
            <FaLinkedin className="text-xl bg-white text-[#0A66C2] cursor-pointer rounded-sm " />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-black text-lg font-semibold mt-4  ">
          Lokesh
        </h1>
        <p className="text-[13px] mt-5 text-black font-semibold text-center">
          I am a web developer skilled in React, JavaScript.I focus on building
          responsive, user-friendly websites.
        </p>
      </div>
      <div className="flex justify-between mt-5 p-2 items-center rounded-md hover:shadow-2xl bg-[#dcdde1]">
        <div>
          <h1 className="text-black font-semibold text-sm">B.Tech</h1>
          <h1 className="text-[13px] font-semibold text-black ">
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
          <h1 className="text-[13px] text-black font-semibold ">
            {" "}
            MP College, Siwan{" "}
          </h1>
        </div>
        <div>
          <p className="text-sm font-bold text-black ">78%</p>
        </div>
      </div>
    </div>
  );
};

export default Left;
