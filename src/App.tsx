import React, { useState } from "react";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { ArrowLeft } from "./icons/icons";

import "./index.scss";

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("mode") !== "light"
  );

  // Lock scroll navigation when dialog is open
  const body = document.querySelector("body")!;
  const html = document.querySelector("html")!;
  if (isDialogOpen) {
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
    html.style.overflow = "visible";
  }

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <div
        className={`back-button ${
          isDialogOpen ? "back-button--animation" : ""
        }`}
        onClick={() => setIsDialogOpen(false)}
      >
        <ArrowLeft />
      </div>
      <Header className={isDialogOpen ? "header--animation" : ""} />
      <Gallery isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default App;
