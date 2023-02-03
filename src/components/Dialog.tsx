import React, { useMemo, useState } from "react";

import { data } from "../configs";
import "../style/dialog.scss";
import "../index.scss";

type Props = {
  isDialogOpen: boolean;
  image: string;
  // any props you want to pass to the component
};

const Dialog: React.FC<Props> = ({ isDialogOpen, image }) => {
  const allImageNames = data.gallery.category.reduce(
    (acc: string[], currentCategory) =>
      acc.concat(currentCategory.images.map((img) => img.name)),
    []
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(
    !image ? -1 : allImageNames.indexOf(image) + 1
  );

  useMemo(() => {
    // if (!image) {
    //   setCurrentImageIndex(-1);
    // }
    setCurrentImageIndex(allImageNames.indexOf(image));
  }, [image]);

  return (
    <div className={`dialog ${isDialogOpen ? "dialog--visible" : ""}`}>
      <button
        className={`dialog__button ${
          currentImageIndex === 0 ? "dialog__button--disabled" : ""
        }`}
        onClick={() =>
          setCurrentImageIndex(
            currentImageIndex === 0
              ? allImageNames.length - 1
              : currentImageIndex - 1
          )
        }
      >
        <i className="dialog__arrow dialog__left" />
      </button>
      <div
        className={`dialog__image  ${
          isDialogOpen ? "dialog__image--transition" : ""
        }`}
      >
        <img
          src={
            allImageNames[currentImageIndex]
              ? require(`../images/${allImageNames[currentImageIndex]}`)
              : ""
          }
          alt="Dialog image"
        />
      </div>
      <button
        className={`dialog__button ${
          currentImageIndex === allImageNames.length - 1
            ? "dialog__button--disabled"
            : ""
        }`}
        onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
      >
        <i className="dialog__arrow dialog__right" />
      </button>
    </div>
  );
};

export default Dialog;
