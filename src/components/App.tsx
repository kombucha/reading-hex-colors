import React from "react";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Train from "./pages/Train";
import FadeTransitionRouter from "./FadeTransitionRouter";

import styles from "./App.module.css";
import Logo from "./base/Logo";
import Footer from "./Footer";

function App() {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <FadeTransitionRouter>
        <Home path="/" />
        <Learn path="learn" />
        <Train path="dashboard" />
      </FadeTransitionRouter>
      <Footer />
    </div>
  );
}

export default App;
