import React, { useState } from "react";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import "./index.scss";

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  //   const [currentImage, setCurrentImage] = useState("");

  console.log("isDialogOpen", isDialogOpen);

  return (
    <div className="app">
      <Header />
      <button className="close-button">Close</button>
      <Gallery setIsDialogOpen={setIsDialogOpen} />
      <Footer />
    </div>
  );
};

export default App;
