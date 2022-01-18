import React from "react";
import { Link } from "react-router-dom";
function Volume(props) {
  return (
    <section className="lash">
      Volume Lashes
      <div className="lash-container">
        <h2 className="lash-title">What are Volume Lash Extensions?</h2>
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
      <p>
        <Link to="/">Back to Homepage</Link>.
      </p>
      <p>
        <Link to="/services">Back to Services Page</Link>.
      </p>
    </section>
  );
}

export default Volume;
