import React from "react";
import { Link, RouteComponentProps } from "@reach/router";

import ColorFullText from "../ColorFullText";

import styles from "./Home.module.css";

type Props = RouteComponentProps;

function Home(_props: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <ColorFullText>Reading hex colors</ColorFullText>
      </h1>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="learn">
            Learn
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="train">
            Train
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
