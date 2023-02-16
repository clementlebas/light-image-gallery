import React, { useEffect, useState, useRef } from "react";

import Dialog from "./Dialog";
import GalleryContent from "./GalleryContent";
import { galleries } from "../configs/data";
import "../index.scss";

type Props = {
  isDialogOpen: boolean;
  setIsDialogOpen: (a: boolean) => void;
};

const Gallery: React.FC<Props> = ({ isDialogOpen, setIsDialogOpen }) => {
  const [currentImage, setCurrentImage] = useState("");

  return (
    <>
      <>
        {galleries.map((gallery, indexGallery) => {
          return (
            <div
              className={`gallery ${
                indexGallery % 2 !== 0 ? "gallery--second-color" : ""
              } ${indexGallery === 0 ? "gallery--first" : ""}`}
              key={indexGallery}
            >
              <GalleryContent
                name={gallery.name}
                images={gallery.images}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                setCurrentImage={setCurrentImage}
              />
            </div>
          );
        })}
      </>
      <Dialog isDialogOpen={isDialogOpen} image={currentImage} />
    </>
  );
};

export default Gallery;
