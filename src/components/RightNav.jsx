import React from "react";

const RightNav = ({
  bgColor,
  bgColor2,
  bgColor3,
  aboutRef,
  projectRef,
  skillsRef,
}) => {
  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full gap-4 flex flex-col items-center justify-between h-full p-2 ">
      {/* about */}
      <div
        className={`w-full h-1/3 border-2 border-[#DFE4EA] rounded-md flex flex-col justify-center items-center cursor-pointer ${bgColor}`}
        onClick={() => handleScroll(aboutRef)}
      >
        <img src="./about.png " alt="" width={25} />
        <h1 className="text-sm font-medium ">About</h1>
      </div>
      {/* projects */}
      <div
        className={`w-full h-1/3 border-2 border-[#DFE4EA] flex flex-col justify-center items-center rounded-md ${bgColor2} `}
        onClick={() => handleScroll(projectRef)}
      >
        <img src="./projects.png" alt="" width={25} />
        <h1 className="text-sm font-medium">Projects</h1>
      </div>

      {/* skills */}
      <div
        className={`w-full h-1/3 border-2 border-[#DFE4EA] flex flex-col justify-center items-center rounded-md ${bgColor3}`}
        onClick={() => handleScroll(skillsRef)}
      >
        <img src="./skill.png" alt="" width={25} />
        <h1 className="text-sm font-medium">Skills</h1>
      </div>
    </div>
  );
};

export default RightNav;
