import "./banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="home">
      <h1 className="name parallax-layer" data-speed="7">
        Mart Anthony
      </h1>
      <h1 className="name parallax-layer" data-speed="4">
        Salazar
      </h1>
      <div className="links">
        <Link to="/works">
          <button>Works</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
