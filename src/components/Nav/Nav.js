import { slide as Menu } from "react-burger-menu";
import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <section className="menu">
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="services" className="menu-item" href="/services">
            Services
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          {/* <a onClick={this.showSettings} className="menu-item--small" href="">
            Contact
          </a> */}
        </Menu>
      </section>
    );
  }
}

export default Nav;
