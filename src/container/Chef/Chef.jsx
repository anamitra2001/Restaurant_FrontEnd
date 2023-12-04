import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="From the Chef's soul" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            An internationally renowned chef with a flair for creating culinary
            masterpieces that transcend borders.
          </p>
        </div>
        <p className="p__opensans">
          <b>Signature Dish</b> - Mango Tango Fusion.{" "}
        </p>
        <p className="p__opensans">
          <b>Awards</b> -
          <ul className="app__chef-awards">
            <li>
              {" "}
              <b>Three Michelin Stars 2023</b> from{" "}
              <b>
                <i>Michelin Guide</i>{" "}
              </b>
              .
            </li>
            <li>
              {" "}
              <b>Outstanding Chef of the Year 2022</b> from{" "}
              <b>
                <i>James Beard Foundation</i>{" "}
              </b>
              .
            </li>
            <li>
              {" "}
              <b>Top 5 Restaurants Worldwide 2021</b> from{" "}
              <b>
                <i>World's 50 Best Restaurants</i>{" "}
              </b>
              .
            </li>
          </ul>{" "}
        </p>
        <p className="p__opensans">
          Signature Dish - <b>Mango Tango Fusion</b>.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>
          <b>Chef Isabella Culinary Maestro</b>
        </p>
        <p className="p__opensans">
          <b>Head Chef</b>
        </p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
