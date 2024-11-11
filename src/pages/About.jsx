import React from "react";
import BannerImage from "../assets/banner-top.png";

const About = () => {
  return (
    <div className="about">
      <div
        style={{ backgroundImage: `url(${BannerImage})` }}
        className="about-top"
      ></div>
      <div className="about-bottom"></div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorem
        quisquam adipisci velit, inventore fugiat cum quasi asperiores ipsam.
        Libero architecto tempora sunt excepturi vero ipsam quis, eum facilis
        aliquam!
      </p>
    </div>
  );
};

export default About;
