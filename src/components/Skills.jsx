import React from "react";
import { motion } from "framer-motion";

const Skills = () => {

  return (
    <motion.div className="h-[60vh] flex flex-col justify-center items-center mt-20 md:mt-12 p-6 " 
    initial={{ y:200, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ type: "tween", duration: 1, ease: "easeOut" }}
    >
      <h1 className="md:hidden text-2xl text-center font-medium">Skills</h1>
      <img src="./skillTree3.svg" alt="" className="mt-5 md:mt-16" />
    </motion.div>
  ); 
};

export default Skills;
