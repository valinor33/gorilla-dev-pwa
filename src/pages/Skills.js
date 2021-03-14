import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

import "./styles/Skills.css";

function Skills() {
  return (
    <React.Fragment>
      <div className="skills">
        <NavBar />
        <main className="main">
          <SideBar />

          <div className="main__content"></div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Skills;
