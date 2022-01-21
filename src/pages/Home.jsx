import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import stars from "../images/stars.png";
import moon from "../images/moon.png";

const Home = () => {
  return (
    <div>
      <img id="stars" className="parallax-layer" data-speed="8" src={stars} />
      <img id="moon" data-speed="4" src={moon} />
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
