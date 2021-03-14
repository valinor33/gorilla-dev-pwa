import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo80px.png";
import ToggleButton from "./ToggleButton";

import "./styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__brand">
        <Link to="/">
          <img className="navbar__brand-logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar__links">
        <ul>
          <li>
            <Link to="/" className="navbar__link-home">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar__link-about">
              Quiénes somos
            </Link>
          </li>
          <li>
            <Link to="/skills" className="navbar__link-skills">
              Habilidades
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="navbar__link-portfolio">
              Porfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar__link-contact">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <ToggleButton />
    </div>
  );
}

export default NavBar;
