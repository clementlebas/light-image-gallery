import React, { useEffect, useState, useRef } from "react";

import Dialog from "./Dialog";
import { data } from "../configs";
import { useOnLoadImages } from "../useOnloadImages";
import "../index.scss";

type Props = {
  isDialogOpen: boolean;
  setIsDialogOpen: (a: boolean) => void;
};

const Gallery: React.FC<Props> = ({ isDialogOpen, setIsDialogOpen }) => {
  const galleries = data.gallery.category;
  const [currentImage, setCurrentImage] = useState("");
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
    reveal();
  }, [isDialogOpen, imagesLoaded]);

  return (
    <>
      {!imagesLoaded && (
        <div className="gallery gallery--first" style={{ marginTop: "200px" }}>
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
      )}
      <>
        {galleries.map((gallery, indexGallery) => {
          return (
            <div
              ref={galleryRef}
              className={`gallery ${
                indexGallery % 2 !== 0 ? "gallery--second-color" : ""
              } ${indexGallery === 0 ? "gallery--first" : ""}`}
              key={indexGallery}
            >
              {!isDialogOpen && imagesLoaded && (
                <div className="gallery__name">{gallery.name}</div>
              )}
              <div className="gallery__content">
                {gallery.images.map((image, index) => {
                  return (
                    <div
                      style={{
                        visibility: imagesLoaded ? "visible" : "hidden",
                      }}
                      className={`gallery__bloc ${
                        index === 0 || index === 10 || index === 14
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
            </div>
          );
        })}
      </>
      <Dialog isDialogOpen={isDialogOpen} image={currentImage} />
    </>
  );
};

export default Gallery;
