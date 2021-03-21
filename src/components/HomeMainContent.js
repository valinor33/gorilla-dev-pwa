import React from "react";
import "./styles/HomeMainContent.css";

function homeMainContent() {
  return (
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
  );
}

export default homeMainContent;
