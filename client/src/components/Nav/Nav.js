import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../../Assets/Logo/logo4.svg";
import "./Nav.scss";
export default class Nav extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <NavLink to="/" className="nav-link">
              <img src={logo} className="nav-img" alt="lash app" />
            </NavLink>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <NavLink to="/" className="nav-links">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-links">
              About
            </NavLink>
            <NavLink to="/services" className="nav-links">
              Serivces
            </NavLink>
            <NavLink to="/prices" className="nav-links">
              Prices
            </NavLink>
            <NavLink to="/contact" className="nav-links">
              Contact
            </NavLink>

            <NavLink to="/login" className="nav-links">
              Login
            </NavLink>

            <NavLink to="/register" className="nav-links">
              Register
            </NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}
