import { useRef, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Works from "./pages/works/Works";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    function followCursor(e) {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    }
    function parallax(e) {
      document.querySelectorAll(".parallax-layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translate(${x}px,${y}px)`;
      });
    }

    function snap() {
      cursor.classList.add("snap");

      setTimeout(() => {
        cursor.classList.remove("snap");
      }, 500);
    }

    window.addEventListener("mousemove", followCursor);
    window.addEventListener("mousemove", parallax);
    window.addEventListener("click", snap);

    return () => {
      window.removeEventListener("mousemove", followCursor);
      window.removeEventListener("mousemove", parallax);
      window.removeEventListener("click", snap);
    };
  }, []);

  return (
    <div>
      <div id="cursor"></div>
      <Router>
        <AnimatePresence exitBeforeEnter>
          <Routes location={window.location} key={window.location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
