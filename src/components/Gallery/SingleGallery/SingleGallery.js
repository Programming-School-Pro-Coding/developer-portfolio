import React from "react";
import Fade from "react-reveal/Fade";

import "./Single.css";

const SingleGallery = ({ id, Title, subTitle, Image }) => {
  return (
    <Fade bottom>
      <article className="projects__card" key={id}>
        <img src={Image} alt="" className="projects__img" />

        <div className="projects__modal">
          <div>
            <span className="projects__subtitle">{subTitle}</span>
            <h3 className="projects__title">{Title}</h3>
            <a
              href={Image}
              className="projects__button button button__small"
            >
              <i className="ri-link"></i>
            </a>
          </div>
        </div>
      </article>
    </Fade>
  );
};

export default SingleGallery;
