import { useState, useEffect } from "react";
import Left from "./Left";
import Middle from "./Middle";
import { motion } from "framer-motion";
import "../App.css";
import { CiSettings } from "react-icons/ci";

function Layout1() {
  const [showSeasons, setShowSeasons] = useState(false);
  const [leaves, setLeaves] = useState([]);
  const [bgColor, setbgColor] = useState("white");
  const [season, setSeason] = useState("Autumn");
  const [isRotate, setIsRotate] = useState(false);

  // console.log(season);

  //  current season
  function getCurrentSeason() {
    const month = new Date().getMonth() + 1;
    if (month >= 3 && month <= 5) {
      return "Spring"; // March - May
    } else if (month >= 6 && month <= 8) {
      return "Summer"; // June - August
    } else if (month >= 9 && month <= 11) {
      return "Autumn"; // September - November
    } else {
      return "Winter"; // December - February
    }
  }

  useEffect(() => {
    const currentSeason = getCurrentSeason();
    setSeason(currentSeason);
    if (currentSeason === "Spring") {
      setbgColor("#F94994");
    } else if (currentSeason === "Summer") {
      setbgColor("#97EC79");
    } else if (currentSeason === "Autumn") {
      setbgColor("#FFC266");
    } else {
      setbgColor("#5C4FC0");
    }
  }, []);

  const seasonLeaves = {
    Autumn: "🍂",
    Summer: "🌿",
    Spring: "🌸",
    Winter: "❄️",
  };

  useEffect(() => {
    const generateLeaves = () => {
      let leafArray = [];

      for (let i = 0; i < 10; i++) {
        leafArray.push({
          id: i,
          left: Math.random() * 100, // Random left position
          delay: Math.random() * 5, // Random delay
        });
      }
      setLeaves(leafArray);
    };
    generateLeaves();
  }, []);

  return (
    <>
      {/* ------------------ */}
      <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none overflow-hidden z-50 ">
        {leaves.map((leaf) => (
          <motion.div
            key={leaf.id}
            className={`absolute text-2xl`}
            initial={{ y: "-10vh", rotate: 0, opacity: 1 }}
            animate={{ y: "100vh", rotate: 360, opacity: 0 }}
            transition={{
              duration: 5,
              delay: leaf.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ left: `${leaf.left}vw ` }}
          >
            {seasonLeaves[season]}
          </motion.div>
        ))}
      </div>
      {/* ---------------- */}
      <div
        className="w-full h-screen py-2 px-10"
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-full flex justify-end">
          <button
            className="mb-2"
            onClick={() => {
              setShowSeasons(!showSeasons);
              setIsRotate(!isRotate);
            }}
          >
            <motion.div
              className="bg-white p-1 rounded-full shadow-lg"
              animate={{ rotate: isRotate ? 360 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }} 
            >
              <CiSettings size={25} />
            </motion.div>
          </button>
        </div>
        <div className="md:flex gap-3 h-[90vh] justify-evenly p-4 bg-white rounded-md">
          <Left />
          <Middle />
        </div>
        {/* Full-screen Blur Overlay */}
        {showSeasons && (
          <div
            className="fixed inset-0 min-h-screen bg-opacity-1 backdrop-blur-[1px] z-40"
            onClick={() => setShowSeasons(false)} // Clicking outside closes dropdown
          ></div>
        )}
        {showSeasons && (
          <div className="fixed top-10 right-4 bg-transparent  p-4  w-40 z-50 overflow-hidden">
            <ul className="space-y-2">
              {[
                { name: "Spring", color: "#F94994" },
                { name: "Winter", color: "#5C4FC0" },
                { name: "Summer", color: "#97EC79" },
                { name: "Autumn", color: "#FFC266" },
              ].map((season, index) => (
                <motion.li
                  key={season.name}
                  className="p-2 rounded-md cursor-pointer flex items-center gap-2"
                  onClick={() => {
                    setbgColor(season.color);
                    setSeason(season.name);
                    setShowSeasons(false)
                  }}
                  initial={{ x: "10vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "tween", duration: 0.5 + index * 0.2 }}
                >
                  {season.name}
                  <span className="w-6 h-6 rounded-full bg-white border border-gray-400 flex items-center justify-center">
                    <span
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: season.color }}
                    ></span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Layout1;
