import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

import "./styles/Home.css";

function Home() {
  return (
    <React.Fragment>
      <div className="home">
        <NavBar />
        <main className="main">
          <SideBar />
          <div className="container">
            <section className="main__content">
              <h1 className="main__content-title">
                ¡Hola, somos <span>Gorilla Dev! </span>
                Diseñamos <span>experiencias</span>
              </h1>
              <div className="main__content-cards">
                <div className="main__content-card1">
                  <div className="main__content-card2"></div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Home;