import React from "react";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Train from "./pages/Train";
import FadeTransitionRouter from "./FadeTransitionRouter";

function App() {
  return (
    <FadeTransitionRouter>
      <Home path="/" />
      <Learn path="learn" />
      <Train path="dashboard" />
    </FadeTransitionRouter>
  );
}

export default App;
