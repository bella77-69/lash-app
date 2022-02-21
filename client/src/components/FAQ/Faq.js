import React from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
function Faq() {
  return (
    <section className="faq">
      <div className="faq-container">
        <Title title=" Can I get my eyelash extensions wet right away?" />

        <p className="faq-answer one">
          It’s not ideal, but it’s okay to get your extensions wet in the first
          24 hours. However, avoid high temperatures like a hot shower or hot
          yoga. Exposing your new extensions to these conditions such as steam,
          sauna, hot tub, could result in poor retention.
        </p>
      </div>
      <div className="faq-container">
        <Title title="How do I clean my Eyelash" />

        <p className="faq-answer two">
          Clean your extensions and eyelids gently, as instructed by your lash
          technician, and use a designated lash cleanser. Oils from skin or
          cosmetics can get onto your extensions and break down adhesive
          otherwise. Failure to clean your lashes will not only result in poor
          retention, but the build-up of dirt can lead to poor retention and
          other problems.
        </p>
      </div>
      <div className="faq-container">
        <Title title="How long do Eyelash Extensions Last?" />

        <p className="faq-answer three">
          It depends. Factors like your natural growth cycle, cosmetics, oily
          skin, sleeping on your side, hormonal changes, stress and more factors
          can affect retention. Generally, clients return around 3 weeks for a
          fill. Usually at this time, there are about half of the extensions
          remaining from the full set.
        </p>
      </div>
      <div className="faq-container">
        <Title title="Are there any products I shouldn't use on my lash extensions?" />

        <p className="faq-answer four">
          Keep oil-based products away from direct contact with your extensions
          and limit the use of oil-based products on your face and hair as much
          as possible. Oil breaks down the lash adhesive. In some cases, it may
          be necessary to avoid oil-containing products altogether.
        </p>
      </div>
      <div className="faq-container">
        <Title title="Can I remove my Lash Extensions myself?" />

        <p className="faq-answer five">
          Always return to your technician for removal or let them grow out
          naturally. Never attempt to remove the extensions yourself.
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
    </section>
  );
}

export default Faq;
