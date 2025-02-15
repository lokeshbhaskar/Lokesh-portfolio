import { motion } from "framer-motion";
// import "./App.css";

import Layout1 from "./components/Layout1";
import Layout2 from "./components/Layout2";
import { useEffect, useState } from "react";
function App() {
  return (
    <>
      <div className="block md:hidden">
        <Layout2 /> {/* Mobile Layout (Below 768px) */}
      </div>
      <div className="hidden md:block">
        <Layout1 /> {/* Desktop Layout (Above 1024px) */}
      </div>
    </>
  );
}

export default App;
