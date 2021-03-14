import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

// import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
