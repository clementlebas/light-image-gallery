import React, { TouchEventHandler, useMemo, useRef, useState } from "react";

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

  const allImageNames = galleries.reduce(
    (acc: string[], currentCategory) =>
      acc.concat(currentCategory.images.map((img) => img.name)),
    []
  );

  const allImageDesriptions = galleries.reduce(
    (acc: string[], currentCategory) =>
      acc.concat(currentCategory.images.map((img) => img.description ?? "")),
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

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const swipeLeft = () => {
    if (currentImageIndex === 0) return;
    setCurrentImageIndex(
      currentImageIndex === 0 ? allImageNames.length - 1 : currentImageIndex - 1
    );
  };
  const swipeRight = () => {
    if (currentImageIndex === allImageNames.length - 1) return;
    setCurrentImageIndex(currentImageIndex + 1);
  };

  const onTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove: TouchEventHandler<HTMLDivElement> = (e) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      if (isLeftSwipe) swipeRight();
      else swipeLeft();
  };

  let imageSrc: string;
  if (allImageNames[currentImageIndex])
    try {
      imageSrc = require(`../configs/images/${allImageNames[currentImageIndex]}`);
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
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {isDialogOpen && (
        <button
          className={`dialog__button ${
            currentImageIndex === 0 ? "dialog__button--disabled" : ""
          }`}
          onClick={swipeLeft}
        >
          <i className="dialog__arrow dialog__left" />
        </button>
      )}
      <div
        className={`dialog__image-container  ${
          isDialogOpen ? "dialog__image-container--transition" : ""
        }`}
      >
        {isDialogOpen && (
          <img className="dialog__img" src={imageSrc ?? ""} ref={imgRef} />
        )}
      </div>
      {isDialogOpen && (
        <button
          className={`dialog__button ${
            currentImageIndex === allImageNames.length - 1
              ? "dialog__button--disabled"
              : ""
          }`}
          onClick={swipeRight}
        >
          <i className="dialog__arrow dialog__right" />
        </button>
      )}
      {isDialogOpen && (
        <div
          className={`dialog__description  ${
            isDialogOpen ? "dialog__description--transition" : ""
          }`}
        >
          <div
            className="dialog__description-content"
            onClick={handleDownloadClick}
          >
            <Download />
          </div>
          <div className="dialog__description-content">
            {allImageDesriptions[currentImageIndex]}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dialog;
