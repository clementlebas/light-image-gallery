import React from "react";

import "./index.css";

type Props = {
  // any props you want to pass to the component
};

const Gallery: React.FC<Props> = (props) => {
  return (
    <div className="gallery">
      <div className="gallery__content">
        <div className="gallery__bloc" />
        <div className="gallery__bloc" />
        <div className="gallery__bloc" />
        <div className="gallery__bloc" />
        <div className="gallery__bloc" />
        <div className="gallery__bloc" />
        <div className="gallery__bloc gallery__bloc--last" />
      </div>
      <div className="gallery__content">
        <div className="gallery__bloc" />
        <div className="gallery__bloc" />
        <div className="gallery__bloc" />
        <div className="gallery__bloc" />
        <div className="gallery__bloc" />
        <div className="gallery__bloc" />
        <div className="gallery__bloc" />
        <div className="gallery__bloc gallery__bloc--last" />
      </div>
    </div>
  );
};

export default Gallery;
