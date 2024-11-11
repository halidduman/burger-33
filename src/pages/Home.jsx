import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.png";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>The Burger</h1>
        <p>
          The Tastiest Burgers <br /> Worth a Try
        </p>
        <Link to={"/menu"}>
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
