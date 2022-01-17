import { slide as Menu } from "react-burger-menu";
import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,
} from "reactstrap";

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

  showSettings(event) {
    event.preventDefault();
  }

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
          {/* <Dropdown>
            <DropdownMenu>
              <NavLink to="/serivces/classic">
                <DropdownItem>Classic</DropdownItem>
              </NavLink>
              <NavLink to="/services/hybrid">
                <DropdownItem>Hybrid</DropdownItem>
              </NavLink>
              <NavLink to="/services/volume">
                <DropdownItem>Volume</DropdownItem>
              </NavLink>
              <NavLink to="/services/russian">
                <DropdownItem>Russian</DropdownItem>
              </NavLink>
              <NavLink to="/services/lift">
                <DropdownItem>Lash Lift</DropdownItem>
              </NavLink>
            </DropdownMenu>
          </Dropdown> */}
          <NavLink to="/contact" className="menu-item">
            Contact
          </NavLink>
          <NavLink to="/login" className="menu-item">
           Login

          
          {/* <a onClick={this.showSettings} className="menu-item--small" href="/login"> */}
        
          {/* </a> */}
          </NavLink>
          <NavLink to="/signup" className="menu-item">
          {/* <a onClick={this.showSettings} className="menu-item--small" href="/signup"> */}
            Signup
            </NavLink>
          {/* </a> */}
        </Menu>
      </section>
    );
  }
}

export default Nav;
