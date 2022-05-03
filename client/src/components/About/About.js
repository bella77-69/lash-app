import React from "react";
import "./About.scss";
import aboutImg from "../../Assets/Images/about-img.jpg";
import Title from "../Title/Title";

const About = () => {
  return (
    <main className="about">
      <div className="about-title">
        <Title title="Our Story" />
      </div>
      <div className="about-wrapper">
        <img className="about-img" src={aboutImg} alt="nice desk" />

        <article className="about-container">
          <p className="about-details">
            Longer, thicker and fuller Lashes! Bella Lashes Inc Eyelash
            Extensions are a semi-permanent way of lengthening and thickening
            your Natural Eyelashes without the need for mascara or curlers.
          </p>
          <p className="about-details">
            {" "}
            Bella Lashes Inc Eyelashes are virtually weightless, and curved to
            replicate a Natural Eyelash. These Lashes are water-resistant, light
            weight and utterly flawless. No one will ever guess that you have
            Eyelash Extensions – those long, luxurious Lashes are your little
            secret. As the largest Eyelash Extension brand in Canada.
          </p>
          <p className="about-details">
            Bella Lashes Inc offers Classic, Volume and Max Volume Eyelash
            Extensions along with other beauty services including Lash Lifts,
            Lash and Brow Tints, Brow Lamination and Threading. With our product
            line of Eyelash Extension aftercare and oil-free cosmetics to help
            the longevity of your Eyelash Extensions, Bella Lashes Inc is your
            one stop shop for all your beauty needs!
          </p>
        </article>
      </div>
    </main>
  );
};

export default About;
