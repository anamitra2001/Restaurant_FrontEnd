import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Welcome to Epicurean Symphony where culinary excellence meets warm
        hospitality!{" "}
      </p>
      <p className="p__opensans" style={{ margin: "0rem 0" }}>
        At Epicurean Symphony, we take pride in creating an unforgettable dining
        experience for our cherished guests. From the moment you step through
        our doors, you embark on a culinary journey crafted with passion,
        precision, and a touch of indulgence.{" "}
      </p>
      <p className="p__opensans" style={{ margin: "1rem 0" }}>
        Immerse yourself in the inviting ambiance of our restaurant, where
        modern sophistication blends seamlessly with a cozy atmosphere. Whether
        you're here for a casual meal with friends, a romantic dinner, or a
        special celebration, our team is dedicated to ensuring your time with us
        is nothing short of extraordinary.Our culinary team is committed to
        using only the finest, freshest ingredients to bring you a menu that
        tantalizes your taste buds and sparks your senses. From innovative
        twists on classic favorites to carefully curated dishes inspired by
        global flavors, every bite is a celebration of culinary artistry.{" "}
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
