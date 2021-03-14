import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { profiles } from "../profiles";

import logo from "../assets/logo250px.png";
import profileIcon from "../assets/icons/profile.svg";

import "./styles/About.css";

function About() {
  return (
    <React.Fragment>
      <div className="about">
        <NavBar />
        <main className="main">
          <SideBar />

          <div className="main__content-about">
            <div className="card__about">
              <h1>Quiénes somos</h1>
              <div className="card__logo">
                <div className="card__logo-img">
                  <img src={logo} alt="logo" />
                </div>
                <h3>
                  Somo una empresa de <span>diseño</span> y{" "}
                  <span>desarollo</span> enfocada en la creación de{" "}
                  <span>páginas web adaptables</span> a todos los dispositivos.
                </h3>
              </div>
              <div className="card__description">
                {profiles.map(({ name, profile }, i) => (
                  <div className="profile" key={i}>
                    <img src={profileIcon} alt="" />
                    <h5>
                      <span>{name}</span>
                    </h5>
                    <h5>{profile}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default About;
