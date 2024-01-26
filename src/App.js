import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import { useContext, useEffect } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [color, setColor] = useState("black");

  const setColorByInput = (colour) => {
    setColor(colour);
  };

  const setDarkMode = () => {
    if (isDark == false) {
      setIsDark({
        backgroundColor: "black",
        color: "white",
      });
    } else {
      setIsDark(false);
    }
  };

  return (
    <BrowserRouter>
      <div
        className={`${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
      >
        <Navbar
          name="Mr.Chirag Bhisikar"
          darkmodestatus={isDark}
          setDarkMode={setDarkMode}
          setColorByInput={setColorByInput}
          color={color}
        />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
