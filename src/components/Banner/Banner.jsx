import "./banner.css";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Banner = ({ show, setShow }) => {
  const navigate = useNavigate();

  const bannerVariant = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0 }, duration: 1 },
    transition1: { duration: 1, delay: 2, easings: "linear" },
    transition2: { duration: 1, delay: 2.8, easings: "linear" },
  };

  const handleNavigate = (link) => {
    setShow(false);
    setTimeout(() => {
      navigate(link);
    }, 1500);
  };
  return (
    <div className="home">
      <AnimatePresence exitBeforeEnter>
        {show && (
          <motion.h1
            variants={bannerVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 1.3, easings: "linear" }}
            className="name parallax-layer"
            data-speed="7"
          >
            Mart Anthony
          </motion.h1>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {show && (
          <motion.h1
            variants={bannerVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 1.8, easings: "linear" }}
            className="name parallax-layer"
            data-speed="7"
            className="name parallax-layer"
            data-speed="4"
          >
            Salazar
          </motion.h1>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 2, easings: "linear" }}
        className="name parallax-layer"
        data-speed="7"
        className="links"
      >
        {show && (
          <div className="links">
            <button onClick={() => handleNavigate("/works")}>Works</button>
            <button onClick={() => handleNavigate("/about")}>About</button>
            <button onClick={() => handleNavigate("/contact")}>Contact</button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Banner;
