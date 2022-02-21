import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import image from "../../Assets/Images/classic.jpg";
import "./Services.scss";

export default class Classic extends Component {
  render() {
    return (
      <section className="lash">
        <Title title="Classic Lashes" />
        <div className="lash-container">
          <div className="lash-img">
            <img src={image} className="lash-image" alt="classic-lashes" />
          </div>
          <Title title="What are Classic Lash Extensions?" />
          <p className="lash-about">
            Classic is a technique used in eyelash extensions where one
            synthetic lash is carefully applied to each natural lash. A variety
            of lengths, curls and thicknesses are used to provide a textured and
            flattering set to every client. Classic lashes should make people
            double take whether or not they are actually yours. In other words,
            look put together without looking made-up.
          </p>
        </div>
        <div>
          <p>
            Using a variety of lengths, curls, and thicknesses to provide a
            textured and flattering set to every client. Classic means one
            synthetic lash that is carefully applied to each natural lash. This
            style of lashes should make people double-take whether or not they
            are actually yours - like you have found the Unicorn of Mascaras. In
            other words, NO SPIDER EYES here. Look put together without looking
            made-up! Consultation to determine your desired look is included in
            the appointment.
          </p>
        </div>
        <div>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
          <p>
            <Link to="/services">Back to Services Page</Link>.
          </p>
        </div>

        <div className="lash-faq">
          <Link to="/services/faq" className="lash-btn">
            Faq{" "}
          </Link>
        </div>
      </section>
    );
  }
}
