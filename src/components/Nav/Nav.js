// import { useState, useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
// import './Nav.scss';

// const Nav = (props) => {
//   const { onSelectMenuItem } = props;
//   const [clearHover, setClearHover] = useState(false);

//   const closeMenu= () => {
//     onSelectMenuItem();
//     setClearHover(true);
//   }

//   useEffect(() => {
//     let timeout;
//     if (clearHover) {
//       timeout = setTimeout(() => {
//         setClearHover(false);
//       }, 0); // Adjust this timeout to suit the applications' needs
//     }
//     return () => clearTimeout(timeout);
//   }, [clearHover]);

//   return (
//     <ul className={`menu ${clearHover ? "clearHover" : ""}`}>
//       <li className="menu-item">
//         <NavLink to="/" onClick={closeMenu}>Home</NavLink>
//       </li>
//       <li className="menu-item">
//         <NavLink to="/about" onClick={closeMenu}>About</NavLink>
//       </li>
//       <li className="menu-item">
//         <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
//         <ul className="sub-menu">
//         <li>
//             <NavLink to="/products/tops" onClick={onSelectMenuItem}>Classic</NavLink>
//           </li>
//           <li>
//             <NavLink to="/products/bottoms" onClick={onSelectMenuItem}>Hybrid</NavLink>
//           </li>
//           <li>
//             <NavLink to="/products/accessories" onClick={onSelectMenuItem}>Volume</NavLink>
//           </li>
//         </ul>
//       </li>
//     </ul>
//   );
// }
// export default Nav;

// import React, {useState} from 'react';

// // router
// import { withRouter } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

// import './Nav.scss';

// const Nav = props => {
//     // conditionally render dropdown affect based on this boolean
//     const [openMenu, setOpenMenu] = useState(false)

//     // parameter num corresponds to .open-# classes
//     // is assigned when Menu clicked triggering animated dropdown
//     const setClassNames = num => {
//         const classArr = ["m-item"];
//         if (openMenu) classArr.push(`open-${num}`)
//         return classArr.join(' ')
//     }

//     // takes route string as parameter
//     const pushToRoute = route => {
//         props.history.push(route)
//         setOpenMenu(false)
//     }

//     return (
//         <div className="Menu">
//             <div className={"m-item m-logo"}
//                 onClick={() => setOpenMenu(!openMenu)}>
//                 Menu
//             </div>
//             <div className={setClassNames(1)}
//                 onClick={() => pushToRoute("/")}>
//                 Home
//             </div>
//             <div className={setClassNames(2)}
//                 onClick={() => pushToRoute("/about")}>
//                 About
//             </div>
//             <div className={setClassNames(3)}
//                 onClick={() => pushToRoute("/book-appointment")}>
//                 Book
//             </div>
           
//             <div className={setClassNames(4)}
//                 onClick={() => pushToRoute("/contact")}>
//                 Contact
//             </div>
//             <div className={setClassNames(4)}
//                 onClick={() => pushToRoute("/services")}>
//                 Services
// </div>
//  <div className={setClassNames(5)}
//                 onClick={() => pushToRoute("/services/classic")}>
//                 Classic
//                 </div>
// </div>
      
//   );
// }

// export default withRouter(Nav);


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
