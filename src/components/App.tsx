import React from "react";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Train from "./pages/Train";

import styles from "./App.module.css";
import Logo from "./base/Logo";
import Footer from "./Footer";
import { Link, Router } from "@reach/router";

function App() {
  return (
    <div className={styles.container}>
      <Link className={styles.homeLink} to="/">
        <Logo />
      </Link>
      {/* Bring back transition effect when it's fixed */}
      {/* <FadeTransitionRouter> */}
      <Router>
        <Home path="/" />
        <Learn path="learn" />
        <Train path="train" />
      </Router>
      {/* </FadeTransitionRouter> */}
      <Footer />
    </div>
  );
}

export default App;
