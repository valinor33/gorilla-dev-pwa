import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

import "./styles/Contact.css";

function Contact() {
  return (
    <React.Fragment>
      <div className="contact">
        <NavBar />
        <main className="main">
          <SideBar />

          <div className="main__content"></div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Contact;
