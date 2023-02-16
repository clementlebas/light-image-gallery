import React, { useEffect, useRef } from "react";

import { useOnLoadImages } from "../useOnloadImages";
import GallerySkeleton from "./GallerySkeleton";
import { Image, Category } from "../types";
import "../index.scss";

type Props = {
  imageName: Image["name"];
  index: number;
  galleryLenght: number;
  isDialogOpen: boolean;
  setIsDialogOpen: (a: boolean) => void;
  setCurrentImage: (a: string) => void;
};

const GalleryImage: React.FC<Props> = ({
  imageName,
  index,
  galleryLenght,
  isDialogOpen,
  setIsDialogOpen,
  setCurrentImage,
}) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const imageLoaded = useOnLoadImages(imageRef);

  const reveal = () => {
    var reveals = document.querySelectorAll(".gallery__bloc");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = -20;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);
    window.addEventListener("load", reveal);
    if (imageLoaded) {
      reveal();
    }
  });

  // console.log("imageLoaded", imageLoaded);

  return (
    <>
      {!imageLoaded && (
        <GallerySkeleton
          className={`${
            index === 0 || (index === 10 && galleryLenght > 13) || index === 14
              ? "large"
              : ""
          } ${
            imageLoaded ? "gallery__bloc--hidden" : "gallery__bloc--visible"
          }`}
        />
      )}
      <div
        ref={imageRef}
        style={{
          visibility: imageLoaded ? "visible" : "hidden",
        }}
        className={`gallery__bloc ${
          index === 0 || (index === 10 && galleryLenght > 13) || index === 14
            ? "large"
            : ""
        } ${isDialogOpen ? "gallery__bloc--animation" : ""}`}
        key={index}
        onClick={() => {
          setIsDialogOpen(true);
          setCurrentImage(imageName);
        }}
      >
        <img src={require(`../images/${imageName}`)} className="gallery__img" />
      </div>
    </>
  );
};

export default GalleryImage;
