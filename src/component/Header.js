import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import "../styles/header.css";

const Header = () => {
  // const linkRef = useRef();
  // const activeLink = () => {
  //   linkRef.current.classList.toggle("list__item_active");
  // };

  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <div className="logo"></div>
          <nav>
            <ul className="menu">
              <li className="menu__item">
                <NavLink to="/" className="list__item">
                  About Us
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/event" className="list__item">
                  Event
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/org" className="list__item">
                  Organization
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/contact" className="list__item">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
