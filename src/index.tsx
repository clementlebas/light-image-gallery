import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./Header";
import Gallery from "./Gallery";
import Footer from "./Footer";
import "./index.css";

const container = document.getElementById("app")!;
const root = createRoot(container);

root.render(
  <>
    <Header />
    <Gallery />
    <Footer />
  </>
);
