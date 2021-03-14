import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

import "./styles/Portfolio.css";

function Portfolio() {
  return (
    <React.Fragment>
      <div className="portfolio">
        <NavBar />
        <main className="main">
          <SideBar />

          <div className="main__content"></div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Portfolio;
