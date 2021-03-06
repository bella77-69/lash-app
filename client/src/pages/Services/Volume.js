import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import image from "../../Assets/Images/volume.webp";

function Volume(props) {
  return (
    <section className="lash">
      <Title title="Volume Lashes" />
      <div className="lash-container">
      <div className="lash-img">
            <img src={image} className="lash-image" alt="classic-lashes" />
          </div>
        <Title title="What are Volume Lash Extensions?" />
        <p className="lash-about">
          Volume is the technique of applying two or more extensions per natural
          eyelash. This allows a trained lash artist to custom create almost any
          look desired by the client. Because of its versatility, the client can
          request anything from a subtle enhancement to a more dramatic look.
          Similarly, volume has the power to remedy common lash complaints such
          as the natural lashes pointing down, too thin or too short. No matter
          which set our clients choose, they always walk away with a defined
          lash line and a light eyeshadow effect created by the wispy lashes.
        </p>
      </div>
      <div>
        <p className="lash-about">
          Craving something more? Russian Volume is a technique where multiple
          ultra-fine lashes are applied to your natural lashes, giving a look
          full of dimension and texture. Skillfully applied fans of 3-5
          ultra-lightweight lashes are attached to each of your natural lashes,
          creating a fluffy, dark, luscious set of lashes. Volume lashes can be
          made to be more subtle and natural, or intense and dramatic.
          Consultation to determine your desired look is included in the
          appointment.
        </p>
      </div>
      <div>
      <div className="lash-faq">
          <Link to="/services/faq" className="lash-link">
            <button className="lash-btn">faq</button>
          </Link>
            <Link to="/">
              <button className="lash-btn">Back to Homepage</button>
            </Link>    
            <Link to="/services">
              <button className="lash-btn">Back to Services Page</button>
            </Link>
          </div>
        </div>
    </section>
  );
}

export default Volume;
