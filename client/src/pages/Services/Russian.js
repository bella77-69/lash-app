import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import image from "../../Assets/Images/russ.jpeg";

function Russian(props) {
  return (
    <section className="lash">
      <Title title="Russian Lashes" />
      <div className="lash-container">
        <div className="lash-img">
          <img src={image} className="lash-image" alt="classic-lashes" />
        </div>
        <Title title="What are Russian Lash Extensions?" />
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

export default Russian;
