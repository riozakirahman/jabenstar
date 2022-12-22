import React, { Fragment } from "react";

import "../styles/header.css";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <div className="logo"></div>
          <nav>
            <ul className="menu">
              <li className="menu__item">
                <a href="" className="list__item">
                  About Us
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="list__item">
                  Event
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="list__item">
                  Organization
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="list__item">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
