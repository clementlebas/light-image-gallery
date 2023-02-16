import React from "react";

import GalleryImage from "./GalleryImage";
import { Image, Category } from "../types";
import "../index.scss";

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
  return (
    <>
      {!isDialogOpen && <div className="gallery__name">{name}</div>}
      <div className="gallery__content">
        {images.map((image, index) => {
          return (
            <GalleryImage
              key={index}
              imageName={image.name}
              index={index}
              galleryLenght={images.length}
              isDialogOpen={isDialogOpen}
              setIsDialogOpen={setIsDialogOpen}
              setCurrentImage={setCurrentImage}
            />
          );
        })}
      </div>
    </>
  );
};

export default GalleryContent;
