import React, { useEffect, useState } from "react";

import Dialog from "./Dialog";
import GalleryContent from "./GalleryContent";
import { galleries } from "../configs/data";
import { Cross } from "../icons/icons";
import "../index.scss";

type Props = {
  isDialogOpen: boolean;
  setIsDialogOpen: (a: boolean) => void;
};

const Gallery: React.FC<Props> = ({ isDialogOpen, setIsDialogOpen }) => {
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    if (!isDialogOpen) setCurrentImage("");
  }, [isDialogOpen]);

  if (!galleries) return null;
  return (
    <>
      <div
        className={`back-button ${
          isDialogOpen ? "back-button--animation" : ""
        }`}
        onClick={() => setIsDialogOpen(false)}
      >
        <Cross />
      </div>
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
                category={gallery.category}
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
