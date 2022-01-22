import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import stars from "../images/stars.png";
import moon from "../images/moon.png";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <AnimatePresence>
      <div>
        <img id="stars" className="parallax-layer" data-speed="8" src={stars} />
        <motion.img
          initial={{ y: -100, x: 300, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          exit={{ y: -100 }}
          transition={{ duration: 2, easings: "linear" }}
          id="moon"
          data-speed="4"
          src={moon}
        />
        <Navbar />
        <Banner />
      </div>
    </AnimatePresence>
  );
};

export default Home;
