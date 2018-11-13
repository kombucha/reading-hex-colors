import React, { useState, useEffect } from "react";
import { Link, RouteComponentProps } from "@reach/router";

import generateRandomNiceColor from "../../utils/generateRandomNiceColor";

import styles from "./Home.module.css";

type Props = RouteComponentProps;

function Home(_props: Props) {
  const [color, setColor] = useState(generateRandomNiceColor());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor(generateRandomNiceColor());
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <h2 className={styles.callOut}>Hey you!</h2>
        <h1 className={styles.title}>Can you read hex colors?</h1>
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} to="train">
              Take the test
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="learn">
              Learn more
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.rightContent} style={{ background: color }}>
        <span className={styles.currentColor}>{color}</span>
      </div>
    </div>
  );
}

export default Home;
