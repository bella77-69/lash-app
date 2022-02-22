import React, { Component } from "react";
import PageHero from "../Hero/PageHero";
import { Link } from "react-router-dom";
import { GiEyelashes } from "react-icons/gi";
import Title from "../Title/Title";
import "./Services.scss";

class Services extends Component {
  state = {
    services: [
      {
        id: "Classic",
        icon: <GiEyelashes />,
        title: "Classic Lash Extensions",
        info: "Classic eyelash extensions basically make your eyelash line look darker and more curled while looking natural. Classic eyelash extensions are a one-to-one application.",
      },
      {
        id: "Hybrid",
        icon: <GiEyelashes />,
        title: "Hybrid Lash Extensions",
        info: "Hybrid lashes are a combination of classic and volume lash extensions across your lash line. Hybrid Lashes will give you volume and length, resulting in a wispy, textured lash extension look.",
      },
      {
        id: "Volume",
        icon: <GiEyelashes />,
        title: "Volume Lash Extensions",
        info: "Volume lashes is a technique in which multiplied lash extensions are fanned out and applied to one natural lash. This technique will give you a fuller and fluffier lash line.",
      },
      {
        id: "Russian",
        icon: <GiEyelashes />,
        title: "Russian Lash Extensions",
        info: "Russian lashes are a type of eyelash extensions where small fans of usually 2-6 lashes are applied to one of your natural lashes, thus creating thick, dense volume lashes.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <PageHero title="services" />
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article
                key={`item-${item.title}`}
                className="services-container"
              >
                <Link
                  to={"/services/" + item.id}
                  key={item.id}
                  className="services-link"
                >
                  <span className="services-icon">{item.icon}</span>
                  <h6 className="services-title">{item.title}</h6>
                  <p className="services-info">{item.info}</p>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
