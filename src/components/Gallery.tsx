import React, { useEffect, useState } from "react";

import Dialog from "./Dialog";
import { data } from "../configs";
import "../index.scss";

type Props = {
  isDialogOpen: boolean;
  setIsDialogOpen: (a: boolean) => void;
  // any props you want to pass to the component
};

const Gallery: React.FC<Props> = ({ isDialogOpen, setIsDialogOpen }) => {
  const galleries = data.gallery.category;
  const [currentImage, setCurrentImage] = useState("");

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
    reveal();
  }, [isDialogOpen]);

  return (
    <>
      {galleries.map((gallery, indexGallery) => {
        return (
          <div
            className={`gallery ${
              indexGallery % 2 !== 0 ? "gallery--second-color" : ""
            }`}
            key={indexGallery}
          >
            {!isDialogOpen && (
              <div className="gallery__name">{gallery.name}</div>
            )}
            <div className="gallery__content">
              {gallery.images.map((image, index) => {
                return (
                  <div
                    className={`gallery__bloc ${
                      index === 0 || index === 10 || index === 14 ? "large" : ""
                    } ${isDialogOpen ? "gallery__bloc--animation" : ""}`}
                    key={index}
                    onClick={() => {
                      setIsDialogOpen(true);
                      setCurrentImage(image.name);
                    }}
                  >
                    <div className="gallery__img gallery__img--skeleton" />
                    <img
                      src={require(`../images/${image.name}`)}
                      className="gallery__img"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <Dialog isDialogOpen={isDialogOpen} image={currentImage} />
    </>
  );
};

export default Gallery;
