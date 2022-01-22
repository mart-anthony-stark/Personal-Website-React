import Navbar from "../../components/Navbar/Navbar";
import p1 from "../../images/projects/exotify.png";
import p2 from "../../images/projects/landingPage.png";
import p3 from "../../images/projects/Pizza.png";
import p4 from "../../images/projects/ShoeShop.png";
import p5 from "../../images/projects/SpaceX.png";
import p6 from "../../images/projects/weather.png";
import p7 from "../../images/projects/News.png";
import p8 from "../../images/projects/jaja.png";
import "./works.css";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="slider">
            <span style={{ "--i": 1 }}>
              <img src={p1} />
            </span>
            <span style={{ "--i": 2 }}>
              <img src={p2} />
            </span>
            <span style={{ "--i": 3 }}>
              <img src={p3} />
            </span>
            <span style={{ "--i": 4 }}>
              <img src={p4} />
            </span>
            <span style={{ "--i": 5 }}>
              <img src={p5} />
            </span>
            <span style={{ "--i": 6 }}>
              <img src={p6} />
            </span>
            <span style={{ "--i": 7 }}>
              <img src={p7} />
            </span>
            <span style={{ "--i": 8 }}>
              <img src={p8} />
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
