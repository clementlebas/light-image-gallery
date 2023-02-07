import React, { useEffect, useMemo, useState } from "react";

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
  const [imgLoaded, setImgLoaded] = useState(false);

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

  // Page has finished loading
  useEffect(() => {
    window.onload = function () {
      setImgLoaded(true);
    };
    window.addEventListener("scroll", reveal);
    reveal();
  }, [isDialogOpen, imgLoaded]);

  return (
    <>
      {!imgLoaded && (
        <div className="gallery gallery--first" style={{ marginTop: "100px" }}>
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
              className={`gallery ${
                indexGallery % 2 !== 0 ? "gallery--second-color" : ""
              } ${indexGallery === 0 ? "gallery--first" : ""}`}
              key={indexGallery}
            >
              {!isDialogOpen && imgLoaded && (
                <div className="gallery__name">{gallery.name}</div>
              )}
              <div className="gallery__content">
                {gallery.images.map((image, index) => {
                  return (
                    <div
                      style={{ visibility: imgLoaded ? "visible" : "hidden" }}
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
