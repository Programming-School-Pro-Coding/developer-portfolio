import React, { useContext } from "react";
import SingleGallery from "./SingleGallery/SingleGallery";
import { makeStyles } from "@material-ui/core/styles";

import { GalleryData } from "../../data/GalleryData";
import "./Gallery.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const Gallery = () => {
  const { theme } = useContext(ThemeContext);
  const useStyles = makeStyles(() => ({
    div: {
      backgroundColor: theme.secondary,
    },
    mainTitle: {
      color: theme.primary,
    }
  }));

  const classes = useStyles();
  return (
    <div className={classes.div}>
      <h1 className={`main-title ${classes.mainTitle}`}>
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
    </div>
  );
};

export default Gallery;
