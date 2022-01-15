import { slide as Menu } from "react-burger-menu";
import React from "react";
import "./Nav.scss";
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <section className="menu">
        <Menu>
          <NavLink to='/' className="menu-item">Home</NavLink>
          <NavLink to='/about' className="menu-item">About</NavLink>
          <NavLink to='/services' className="menu-item">Serivces</NavLink>
          <NavLink to='/contact' className="menu-item">Contact</NavLink>
       
     
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Login
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Signup
          </a>
        </Menu>
      </section>
    );
  }
}

export default Nav;
