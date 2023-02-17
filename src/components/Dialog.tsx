import React, { useEffect, useMemo, useRef, useState } from "react";

import { galleries } from "../configs/data";
import { Download } from "../icons/icons";
import "../style/dialog.scss";
import "../index.scss";

type Props = {
  isDialogOpen: boolean;
  image: string;
};

const Dialog: React.FC<Props> = ({ isDialogOpen, image }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [resizeClass, setResizeClass] = useState("");

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    const imageToDownload = allImageNames.filter((name, i) => {
      if (i === currentImageIndex) {
        return name;
      }
    });
    const imageUrl = require(`../images/${imageToDownload[0]}`);
    link.href = imageUrl;
    link.download = imageToDownload[0];
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const allImageNames = galleries.reduce(
    (acc: string[], currentCategory) =>
      acc.concat(currentCategory.images.map((img) => img.name)),
    []
  );

  const allImageDesriptions = galleries.reduce(
    (acc: string[], currentCategory) =>
      acc.concat(currentCategory.images.map((img) => img.description)),
    []
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(
    !image ? -1 : allImageNames.indexOf(image)
  );

  useMemo(() => {
    if (!image) {
      setCurrentImageIndex(-1);
    }
    setCurrentImageIndex(allImageNames.indexOf(image));
  }, [image]);

  useEffect(() => {
    if (imgRef.current?.width!) {
      const x = imgRef.current?.width;

      switch (true) {
        case x < 550:
          setResizeClass("dialog__image--rescale-7");
          break;
        case x < 800:
          setResizeClass("dialog__image--rescale-5");
          break;
        default:
          setResizeClass("dialog__image--rescale-3");
          break;
      }
    }
  }, [currentImageIndex]);

  return (
    <div
      ref={dialogRef}
      className={`dialog ${isDialogOpen ? "dialog--visible" : ""}`}
    >
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
        } ${resizeClass}`}
      >
        <img
          src={
            allImageNames[currentImageIndex]
              ? require(`../images/${allImageNames[currentImageIndex]}`)
              : ""
          }
          ref={imgRef}
          alt="Not Found"
        />
      </div>
      <div
        className={`dialog__description  ${
          isDialogOpen ? "dialog__description--transition" : ""
        }`}
      >
        <div onClick={handleDownloadClick}>
          <Download />
        </div>
        <div style={{ marginTop: "2px" }}>
          {allImageDesriptions[currentImageIndex]}
        </div>
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
