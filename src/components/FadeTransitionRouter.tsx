import React from "react";
import { Router, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styles from "./FadeTransitionRouter.module.css";

const FadeTransitionRouter: React.SFC = ({ children }) => (
  <Location>
    {({ location }) => (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames={styles} timeout={350} exit={true}>
          <Router location={location}>{children}</Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
);

export default FadeTransitionRouter;
