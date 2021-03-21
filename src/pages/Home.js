import React from "react";
import HomeMainContent from "../components/HomeMainContent";
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
          <div className="container">{/* <HomeMainContent /> */}</div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Home;
