import React, { useEffect, useRef, useState } from "react";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import "./index.scss";

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("mode") !== "light"
  );
  const appRef = useRef<HTMLDivElement>(null);

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
      body.scrollTo(0, Number(localStorage.getItem("scrollPosition")) ?? 0);
      html.scrollTo(0, Number(localStorage.getItem("scrollPosition")) ?? 0);
    }
  }, [isDialogOpen]);

  useEffect(() => {
    window.addEventListener("beforeunload", scrollOnTop);
    return () => {
      window.removeEventListener("beforeunload", scrollOnTop);
    };
  }, []);

  const scrollOnTop = () => {
    localStorage.setItem("scrollPosition", String(0));
  };

  return (
    <div
      ref={appRef}
      className={`app ${isDarkMode ? "dark" : "light"}`}
      id="app"
    >
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
