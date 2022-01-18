import { slide as Menu } from "react-burger-menu";
import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { NavbarToggler } from "reactstrap";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  // showSettings(event) {
  //   event.preventDefault();
  // }

  render() {
    return (
      <section className="menu">
        <Menu>
          <NavbarToggler onClick={this.toggle} />
          <NavLink to="/" className="menu-item">
            Home
          </NavLink>
          <NavLink to="/about" className="menu-item">
            About
          </NavLink>
          <NavLink to="/book-appointment" className="menu-item">
            Book Appointment
          </NavLink>
          <NavLink to="/services" className="menu-item">
            Serivces
          </NavLink>
          <NavLink to="/contact" className="menu-item">
            Contact
          </NavLink>
          <NavLink to="/login" className="menu-item">
            Login
          </NavLink>
          <NavLink to="/signup" className="menu-item">
            Signup
          </NavLink>
        </Menu>
      </section>
    );
  }
}

export default Nav;
