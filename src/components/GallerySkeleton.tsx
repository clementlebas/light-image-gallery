import React from "react";

import "../index.scss";

const GallerySkeleton: React.FC = () => {
  return (
    <div className="gallery gallery--first" style={{ marginTop: "150px" }}>
      <div className="gallery__content">
        <div className="large">
          <div className="gallery__img--skeleton" />
        </div>
        <div>
          <div className="gallery__img--skeleton" />
        </div>
        <div>
          <div className="gallery__img--skeleton" />
        </div>
        <div>
          <div className="gallery__img--skeleton" />
        </div>
        <div>
          <div className="gallery__img--skeleton" />
        </div>
        <div>
          <div className="gallery__img--skeleton" />
        </div>
        <div>
          <div className="gallery__img--skeleton" />
        </div>
        <div>
          <div className="gallery__img--skeleton" />
        </div>
        <div>
          <div className="gallery__img--skeleton" />
        </div>
        <div>
          <div className="gallery__img--skeleton" />
        </div>
        <div className="large">
          <div className="gallery__img--skeleton" />
        </div>
        <div>
          <div className="gallery__img--skeleton" />
        </div>
        <div>
          <div className="gallery__img--skeleton" />
        </div>
        <div>
          <div className="gallery__img--skeleton" />
        </div>
      </div>
    </div>
  );
};

export default GallerySkeleton;
