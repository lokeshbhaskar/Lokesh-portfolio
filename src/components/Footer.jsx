import React from "react";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="h-[60vh]">
      <div className="p-10 md:mt-40">
        <motion.h1
          className="text-[15px] font-medium  "
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: -40, opacity: 1 }}
          transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
        >
          Thank's for reaching the bottom of this page. If you like what you
          see, let's connect and build something together.
        </motion.h1>
        <motion.h1
          className="text-[15px] font-bold"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: -30, opacity: 1 }}
          transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
        >
          Alternatively, here's a fancy sheet of paper.{" "}
          <a href="./Lokesh_k.pdf" target="_blank" className="text-pink-400">
            Resume
          </a>
        </motion.h1>
      </div>
    </div>
  );
};

export default Footer;
