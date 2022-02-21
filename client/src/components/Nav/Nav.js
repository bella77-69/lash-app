// import { slide as Menu } from "react-burger-menu";
// import React from "react";
// import "./Nav.scss";
// import { NavLink } from "react-router-dom";
// import { NavbarToggler } from "reactstrap";
// import AuthOptions from "../Auth/AuthOptions";

// class Nav extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false,
//     };
//   }

//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   }

//   // showSettings(event) {
//   //   event.preventDefault();
//   // }

//   render() {
//     return (
//       <section className="menu">
//         <Menu>
//           <NavbarToggler onClick={this.toggle} />
//           <NavLink to="/" className="menu-item">
//             Home
//           </NavLink>
//           <NavLink to="/about" className="menu-item">
//             About
//           </NavLink>
//           {/* <NavLink to="/book-appointment" className="menu-item">
//             Book Appointment
//           </NavLink> */}
//           <NavLink to="/services" className="menu-item">
//             Serivces
//           </NavLink>
//           <NavLink to="/contact" className="menu-item">
//             Contact
//           </NavLink>

//            <NavLink to="/login" className="menu-item">
//             Login
//           </NavLink>

//           <NavLink to="/register" className="menu-item">
//             Register
//           </NavLink>

//         </Menu>
//       </section>
//     );
//   }
// }

// export default Nav;

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
            {/* <NavLink to="/book-appointments" className="nav-links">
             Book
           </NavLink> */}
            <NavLink to="/services" className="nav-links">
              Serivces
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
