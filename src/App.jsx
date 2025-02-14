import { useState, useEffect } from "react";
import Left from "./components/Left";
import Middle from "./components/Middle";
import { motion } from "framer-motion";
// import "./App.css";
import { CiSettings } from "react-icons/ci";
import Layout1 from "./components/Layout1";
import Layout2 from "./components/Layout2";
function App() {
   
  const [isMobile,setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <div
    //   className="w-full h-screen py-2 px-10"
    //   style={{ backgroundColor: bgColor }}
    // >
    //   <div className="w-full flex justify-end">
    //     <button className="mb-2" onClick={() => setShowSeasons(!showSeasons)}>
    //       <div className="bg-white p-1 rounded-full shadow-lg">
    //         <CiSettings size={25} />
    //       </div>
    //     </button>
    //   </div>
    //   <div className="md:flex gap-3 h-[90vh] justify-evenly p-4 bg-white rounded-md">
    //     <Left />
    //     <Middle />
    //   </div>
    //   {/* Full-screen Blur Overlay */}
    //   {showSeasons && (
    //     <div
    //       className="fixed inset-0 min-h-screen bg-opacity-1 backdrop-blur-[1px] z-40"
    //       onClick={() => setShowSeasons(false)} // Clicking outside closes dropdown
    //     ></div>
    //   )}
    //   {showSeasons && (
    //     <div className="fixed top-10 right-4 bg-transparent  p-4  w-40 z-50 overflow-hidden">
    //       <ul className="space-y-2">
    //         {[
    //           { name: "Spring", color: "#F94994" },
    //           { name: "Winter", color: "#5C4FC0" },
    //           { name: "Summer", color: "#97EC79" },
    //           { name: "Autumn", color: "#FFC266" },
    //         ].map((season, index) => (
    //           <motion.li
    //             key={season.name}
    //             className="p-2 rounded-md cursor-pointer flex items-center gap-2"
    //             onClick={() => setbgColor(season.color)}
    //             initial={{ x: "10vw", opacity: 0 }}
    //             animate={{ x: 0, opacity: 1 }}
    //             transition={{ type: "tween", duration: 0.5 + index * 0.2 }}
    //           >
    //             {season.name}
    //             <span className="w-6 h-6 rounded-full bg-white border border-gray-400 flex items-center justify-center">
    //               <span
    //                 className="w-4 h-4 rounded-full"
    //                 style={{ backgroundColor: season.color }}
    //               ></span>
    //             </span>
    //           </motion.li>
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    // </div>
    <>
     {
      isMobile ? <Layout2/> :  <Layout1 /> 
     }
    </>
  );
}

export default App;
