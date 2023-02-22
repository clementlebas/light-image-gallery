import React from "react";

import GalleryImage from "./GalleryImage";
import { Gallery } from "../types";
import "../index.scss";

type Props = {
  name: Gallery["name"];
  images: Gallery["images"];
  isDialogOpen: boolean;
  setIsDialogOpen: (a: boolean) => void;
  setCurrentImage: (a: string) => void;
};

const GalleryContent: React.FC<Props> = ({
  name,
  images,
  isDialogOpen,
  setIsDialogOpen,
  setCurrentImage,
}) => {
  if (!images) return null;
  return (
    <>
      {!isDialogOpen && name && <div className="gallery__name">{name}</div>}
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
