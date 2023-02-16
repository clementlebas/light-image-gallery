import React, { useEffect, useRef } from "react";

import { useOnLoadImages } from "../useOnloadImages";
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
  const imageSrc = require(`../images/${imageName}`);

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
  }, [imageLoaded]);

  return (
    <>
      <div
        ref={imageRef}
        className={`gallery__bloc ${
          index === 0 || (index === 10 && galleryLenght > 13) || index === 14
            ? "large"
            : ""
        } ${isDialogOpen ? "gallery__bloc--animation" : ""} ${
          !imageLoaded ? "gallery__bloc--skeleton" : ""
        }`}
        key={index}
        onClick={() => {
          setIsDialogOpen(true);
          setCurrentImage(imageName);
        }}
      >
        <img className="gallery__img" src={imageSrc} />
      </div>
    </>
  );
};

export default GalleryImage;
