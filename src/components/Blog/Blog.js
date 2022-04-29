import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { HiArrowRight } from "react-icons/hi";

import "./Blog.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import SingleBlog from "./SingleBlog/SingleBlog";
import { urlFor, client } from "../../client";

function Blog() {
  const { theme } = useContext(ThemeContext);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'post']";

    client.fetch(query).then((data) => {
      setBlogs(data);
    });
  }, [setBlogs]);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {blogs.length > 0 && (
        <div
          className="blog"
          id="blog"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="blog--header">
            <h1
              className="main-title"
              style={{ transform: "translateY(20px)" }}
            >
              Blog
            </h1>
          </div>
          <div className="blog--body">
            <div className="blog--bodyContainer">
              {blogs
                .slice(0, 3)
                .reverse()
                .map((blog) => (
                  <SingleBlog
                    theme={theme}
                    title={blog.title}
                    desc={blog.desc}
                    date={blog.publishedAt}
                    image={urlFor(blog.mainImage)}
                    url={`https://programming-school.hashnode.dev/${blog.slug.current}`}
                    key={blog._id}
                    id={blog._id}
                  />
                ))}
            </div>

            {blogs.length > 3 && (
              <div className="blog--viewAll">
                <Link to="/blog">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Blog;
