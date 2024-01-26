import * as React from "react";
import Navbar from "./component/Navbar";
import TextForm from "./component/InputElements/TextForm";
import PasswordInput from "./component/InputElements/PasswordInput";
import About from "./component/About";
import { useState } from "react";
import Alert from "./component/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("black");

  const setColorByInput = (colour) => {
    setColor(colour);
  };

  const showAlert = (type, message) => {
    if (type == null && message == null) {
      setAlert(null);
    } else {
      setAlert({
        msg: message,
        type: type,
      });
    }
    setTimeout(() => {
      setAlert(null);
    }, 2000);
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

  const root = createRoot(document.getElementById("root"));

  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route exact path="/about" element={<About />}></Route>
        {/* <Route
                exact
                path="/"
                element={
                  <Textbox
                    showAlert={showAlert}
                    heading="Enter Text to analyze "
                    mode={mode}
                  />
                }
              ></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <>
<BrowserRouter basename="/app">
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
    <Alert alert={alert} />
    <Routes>
      <Route exact path="/about" element={<About />}></Route>
      <Route
          exact
          path="/"
          element={
            <Textbox
              showAlert={showAlert}
              heading="Enter Text to analyze "
              mode={mode}
            />
          }
        ></Route>
    </Routes>
  </div>
</BrowserRouter>
</> */
}
{
  /* <BrowserRouter>
      <div
        className={`${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
      >
        
        <Alert alert={alert} />
        <TextForm
          heading="Enter Email"
          placeholder="Enter Email"
          type="text"
          alert={alert}
          showAlert={showAlert}
        />
        <PasswordInput alert={alert} showAlert={showAlert} />

        <Routes>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter> */
}
