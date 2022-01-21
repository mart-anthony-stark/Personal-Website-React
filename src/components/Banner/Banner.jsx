import "./banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const handleCursor = (state) => {
    const cursor = document.querySelector("#cursor");
    if (state === "enter") {
      cursor.classList.add("highlight");
    } else {
      cursor.classList.remove("highlight");
    }
  };

  return (
    <div className="home">
      <h1
        onMouseEnter={() => handleCursor("enter")}
        onMouseLeave={() => handleCursor("leave")}
        className="name parallax-layer"
        data-speed="7"
      >
        Mart Anthony
      </h1>
      <h1
        onMouseEnter={() => handleCursor("enter")}
        onMouseLeave={() => handleCursor("leave")}
        className="name parallax-layer"
        data-speed="4"
      >
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
