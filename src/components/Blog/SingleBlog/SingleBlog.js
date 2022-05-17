import React from 'react'
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleBlog.scss';

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    return (
      <Fade bottom>
        <a
          className="singleBlog"
          key={id}
          href={url}
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: theme.primary400 }}
        >
          <div
            className="singleBlog__image"
            style={{ backgroundColor: theme.secondary }}
          >
            <img src={image ? image : placeholder} alt={title} />
          </div>
          <div className="singleBlog__body">
            <p style={{ color: theme.tertiary }}>{date}</p>
            <p style={{ color: theme.tertiary }}>
              by{" "}
              <a href="https://github.com/Programming-School-Pro-Coding" target="_blank" rel="noreferrer">
                Programming School
              </a>
            </p>
            <h3 style={{ color: theme.MyColor }}>{title}</h3>
            <h6 style={{ color: theme.MyColor }}>{desc}</h6>
          </div>
          <div className="singleBlog__categories"></div>
        </a>
      </Fade>
    );
}

export default SingleBlog
