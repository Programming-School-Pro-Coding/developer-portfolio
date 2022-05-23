import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BsTwitter } from "react-icons/bs";

import "./twitter.css";

function BackToTop() {
  const useStyles = makeStyles(() => ({
    icon: {
      fontSize: "3rem",
      color: "#019DE5",
    },
  }));

  const classes = useStyles();

  // const handleTweet = () => {
  //   window.open(
  //     'https://twitter.com/intent/tweet?text=Thank%20you%20%40rinormaloku%20for%20writing%20this%20helpful%20article.%0A%0ALearn%20Istio%20%E2%80%93%20How%20to%20Manage%2C%20Monitor%2C%20and%20Secure%20Microservices%0A%0Ahttps://www.freecodecamp.org/news/learn-istio-manage-microservices/',
  //     'share-twitter',
  //     'width=550, height=235'
  //   ); 
  //   return false;
  // }

  return (
    <div style={{ display: "inline" }} className="Twitter">
      <a
        aria-label="Twitter"
        target="_blank"
        rel="noreferrer"
        // onClick={handleTweet()}
        href="https://twitter.com/intent/tweet?text=This%20is%20an%20open%20source%20portfolio%20that%20React.js%20Developers%20can%20clone,%20deploy,%20and%20fully%20customize%20for%20his/her%20portfolio%20Made%20with%20❤%20by%20%40Programing_Pro%20.%20%0A%0DThank%20you%20%40Programing_Pro%20for%20making%20this%20awesome%20portfolio.%0A%0DDeveloper-Portfolio%20%0A%0Ahttps://mohamed-ehab-portfolio.vercel.app"
      >
        {/* <FaTwitter className={classes.icon} /> */}
        <BsTwitter className={classes.icon} />
      </a>
    </div>
  );
}

export default BackToTop;
