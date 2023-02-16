import React from "react";

import "../index.scss";

type Props = {
  className: string;
};

const GallerySkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="gallery__img--skeleton" />
    </div>
  );
};

export default GallerySkeleton;
