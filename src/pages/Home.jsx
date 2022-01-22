import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import stars from "../images/stars.png";
import moon from "../images/moon.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <motion.div
      animate={{ y: 0, x: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 2, easings: "linear" }}
    >
      <img id="stars" className="parallax-layer" data-speed="8" src={stars} />
      <AnimatePresence exitBeforeEnter>
        {show && (
          <motion.img
            initial={{ y: -100, x: 300, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 1, easings: "linear" }}
            id="moon"
            data-speed="4"
            src={moon}
          />
        )}
      </AnimatePresence>

      <Navbar />
      <Banner show={show} setShow={setShow} />
    </motion.div>
  );
};

export default Home;
