import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          At <b>Epicurean Symphony</b>, hospitality is not just a service; it's
          a heartfelt commitment to making you feel at home. Our attentive staff
          is here to anticipate your needs, answer your questions, and ensure
          that every moment spent with us is filled with warmth and genuine
          care.Our commitment goes beyond just serving exceptional food. It's
          about cultivating an experience that leaves a lasting impression. Our
          attentive and knowledgeable staff is here to guide you through the
          menu, suggesting perfect pairings and ensuring that your time with us
          is not just a meal but a symphony of moments to be treasured.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          At <b>Epicurean Symphony</b>, we believe that dining is not just a meal; it's
          an orchestrated experience that engages all your senses. Our culinary
          maestros craft a symphony of flavors, using the finest ingredients and
          innovative techniques to create dishes that dance on your palate. As
          the conductor of this culinary orchestra, we take pride in curating a
          menu that reflects a deep appreciation for diverse tastes and global
          inspirations. From classic compositions to avant-garde creations,
          every dish is a melodic celebration of flavors, textures, and aromas.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
