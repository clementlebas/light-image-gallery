import React, { useEffect } from "react";

import { data } from "./configs";
import "./index.css";

type Props = {
  // any props you want to pass to the component
};

const Gallery: React.FC<Props> = (props) => {
  const galleries = data.gallery.category;

  useEffect(() => {
    const reveal = () => {
      var reveals = document.querySelectorAll(".gallery__bloc");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = -20;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };
    window.addEventListener("scroll", reveal);
    reveal();
  }, []);

  return (
    <>
      {galleries.map((gallery, indexGallery) => {
        return (
          <div className="gallery" key={indexGallery}>
            <div className="gallery__name">{gallery.name}</div>
            <div className="gallery__content">
              {gallery.images.map((image, index) => {
                return (
                  <div
                    className={`gallery__bloc ${
                      index === 0 || index === 10 || index === 14 ? "large" : ""
                    }`}
                    key={index}
                  >
                    <img
                      src={require(`./images/${image.name}`)}
                      alt="Not Found"
                      className="gallery__img"
                      // TODO: handle onerror when image not found
                      // onError={({ currentTarget }) => {
                      //   console.log("errrror");
                      // }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Gallery;
