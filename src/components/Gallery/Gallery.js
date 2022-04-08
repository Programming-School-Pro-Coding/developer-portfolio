import React, { useContext } from "react";
import SingleGallery from "./SingleGallery/SingleGallery";

import { GalleryData } from "../../data/GalleryData";
import { ThemeContext } from "../../contexts/ThemeContext";

const Gallery = () => {
  const { theme } = useContext(ThemeContext);
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
        {/* <article className="projects__card">
          {/* <!-- Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) -->
          <img src={git} alt="" className="projects__img" />

          <div className="projects__modal">
            <div>
              <span className="projects__subtitle">Command Line</span>
              <h3 className="projects__title">Git & GitHub Design</h3>
              <a href="web" className="projects__button button button__small">
                <i className="ri-link"></i>
              </a>
            </div>
          </div>
        </article>

        <article className="projects__card">
          <img src={JavaScript} alt="" className="projects__img" />

          <div className="projects__modal">
            <div>
              <span className="projects__subtitle">Figma</span>
              <h3 className="projects__title">Top JavaScript Projects Design</h3>
              <a href="web" className="projects__button button button__small">
                <i className="ri-link"></i>
              </a>
            </div>
          </div>
        </article>

        <article className="projects__card">
          <img src={YT} alt="" className="projects__img" />

          <div className="projects__modal">
            <div>
              <span className="projects__subtitle">YT For Web Dev</span>
              <h3 className="projects__title">The Best YouTube Channels</h3>
              <a href="web" className="projects__button button button__small">
                <i className="ri-link"></i>
              </a>
            </div>
          </div>
        </article>

        <article className="projects__card">
          <img src={Banner} alt="" className="projects__img" />

          <div className="projects__modal">
            <div>
              <span className="projects__subtitle">Banner For YouTube</span>
              <h3 className="projects__title">YouTube Banner</h3>
              <a href="web" className="projects__button button button__small">
                <i className="ri-link"></i>
              </a>
            </div>
          </div>
        </article> */}
      </div>
    </>
  );
};

export default Gallery;
