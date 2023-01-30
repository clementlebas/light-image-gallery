import React from "react";

import { data } from "./configs";
import "./index.css";

type Props = {
  // any props you want to pass to the component
};

const Gallery: React.FC<Props> = (props) => {
  const galleries = data.gallery.category;

  return (
    <div className="gallery">
      {galleries.map((gallery, index) => {
        return (
          <>
            <div className="gallery__name" key={index}>
              {gallery.name}
            </div>
            <div className="gallery__content" key={index}>
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
          </>
        );
      })}
    </div>
  );
};

export default Gallery;
