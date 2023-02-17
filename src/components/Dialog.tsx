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

  let imageSrc: string;
  if (allImageNames[currentImageIndex])
    try {
      imageSrc = require(`../images/${allImageNames[currentImageIndex]}`);
    } catch (e) {
      console.log(
        "Image source not found",
        allImageNames[currentImageIndex],
        e
      );
    }

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = allImageNames[currentImageIndex];
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      ref={dialogRef}
      className={`dialog ${isDialogOpen ? "dialog--visible" : ""}`}
    >
      {isDialogOpen && (
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
      )}
      <div
        className={`dialog__image  ${
          isDialogOpen ? "dialog__image--transition" : ""
        } ${resizeClass}`}
      >
        {isDialogOpen && <img src={imageSrc ?? ""} ref={imgRef} />}
      </div>
      {isDialogOpen && (
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
      )}
      {isDialogOpen && (
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
      )}
    </div>
  );
};

export default Dialog;
