import React, { useState } from "react";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import "./index.scss";

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const body = document.querySelector("body")!;
  if (isDialogOpen) body.style.overflow = "hidden";
  else body.style.overflow = "visible";

  return (
    <div className="app">
      {isDialogOpen ? (
        <button className="back-button" onClick={() => setIsDialogOpen(false)}>
          Close
        </button>
      ) : (
        <Header />
      )}
      <Gallery isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
      <Footer />
    </div>
  );
};

export default App;
