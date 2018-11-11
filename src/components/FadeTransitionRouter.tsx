import React from "react";
import { Router, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styles from "./FadeTransitionRouter.module.css";

const classNames = { enter: styles.fadeEnter, enterActive: styles.fadeEnterActive };

const FadeTransitionRouter: React.SFC = ({ children }) => (
  <Location>
    {({ location }) => (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames={classNames} timeout={200}>
          <Router location={location}>{children}</Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
);

export default FadeTransitionRouter;
