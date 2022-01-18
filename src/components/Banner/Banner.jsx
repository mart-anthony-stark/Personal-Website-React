import "./banner.css";

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
    </div>
  );
};

export default Banner;
