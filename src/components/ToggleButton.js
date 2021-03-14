import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo160px.png";

import "./styles/ToggleButton.css";

function ToggleButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="burguerMenu">
      <button onClick={() => setOpen(!open)} className="navbar__burguer-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <div className={open === true ? "navbar__links__mobile" : "hidden"}>
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
          <li>
            <Link to="/">
              <img className="navbarmobile__brand-logo" src={logo} alt="logo" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ToggleButton;
