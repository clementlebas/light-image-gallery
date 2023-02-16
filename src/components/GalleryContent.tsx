import React, { useEffect, useRef } from "react";

import { useOnLoadImages } from "../useOnloadImages";
import { Image, Category } from "../types";
import "../index.scss";
import GallerySkeleton from "./GallerySkeleton";

type Props = {
  name: Category["name"];
  images: Image[];
  isDialogOpen: boolean;
  setIsDialogOpen: (a: boolean) => void;
  setCurrentImage: (a: string) => void;
  // any props you want to pass to the component
};

const GalleryContent: React.FC<Props> = ({
  name,
  images,
  isDialogOpen,
  setIsDialogOpen,
  setCurrentImage,
}) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useOnLoadImages(galleryRef);

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
    if (imagesLoaded) {
      reveal();
    }
  }, [imagesLoaded]);

  return (
    <>
      {!isDialogOpen && imagesLoaded && (
        <div className="gallery__name">{name}</div>
      )}

      <div className="gallery__content" ref={galleryRef}>
        {!imagesLoaded && <GallerySkeleton />}
        {images.map((image, index) => {
          return (
            <div
              style={{
                visibility: imagesLoaded ? "visible" : "hidden",
              }}
              className={`gallery__bloc ${
                index === 0 ||
                (index === 10 && images.length > 13) ||
                index === 14
                  ? "large"
                  : ""
              } ${isDialogOpen ? "gallery__bloc--animation" : ""}`}
              key={index}
              onClick={() => {
                setIsDialogOpen(true);
                setCurrentImage(image.name);
              }}
            >
              <img
                src={require(`../images/${image.name}`)}
                className="gallery__img"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalleryContent;
