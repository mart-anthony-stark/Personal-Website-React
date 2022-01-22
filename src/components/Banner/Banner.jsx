import "./banner.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = ({ show, setShow }) => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    setShow(false);
    setTimeout(() => {
      navigate(link);
    }, 2000);
  };
  return (
    <div className="home">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100 }}
        transition={{ duration: 1, delay: 2, easings: "linear" }}
        className="name parallax-layer"
        data-speed="7"
      >
        Mart Anthony
      </motion.h1>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100 }}
        transition={{ duration: 1, delay: 2.8, easings: "linear" }}
        className="name parallax-layer"
        data-speed="7"
        className="name parallax-layer"
        data-speed="4"
      >
        Salazar
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 3, easings: "linear" }}
        className="name parallax-layer"
        data-speed="7"
        className="links"
      >
        <button onClick={() => handleNavigate("/works")}>Works</button>
        <button>About</button>
        <button>Contact</button>
      </motion.div>
    </div>
  );
};

export default Banner;
