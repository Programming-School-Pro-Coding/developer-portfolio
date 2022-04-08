import React from "react";
import SingleGallery from "./SingleGallery/SingleGallery";

import { GalleryData } from "../../data/GalleryData";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <h1 className="main-title">
        Gallery
      </h1>
      <div
        className="projects__content grid filters__active"
        data-content
        id="projects"
      >
        {GalleryData.map((gallery) => (
          <SingleGallery
            key={gallery.id}
            id={gallery.id}
            Title={gallery.Title}
            subTitle={gallery.subTitle}
            Image={gallery.image}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
