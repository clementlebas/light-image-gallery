import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import "./index.scss";

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("mode") !== "light"
  );

  // Lock scroll navigation when dialog is open
  const body = document.querySelector("body")!;
  const html = document.querySelector("html")!;

  useEffect(() => {
    if (isDialogOpen) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
      html.style.overflow = "visible";
      body.scrollTo(0, Number(localStorage.getItem("scrollPostion")) ?? 0);
      html.scrollTo(0, Number(localStorage.getItem("scrollPostion")) ?? 0);
    }
  }, [isDialogOpen]);

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`} id="app">
      <Header className={isDialogOpen ? "header--animation" : ""} />
      <Gallery isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
      <Footer
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isDialogOpen={isDialogOpen}
      />
    </div>
  );
};

export default App;
