import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";

import generateRandomNiceColor from "../../utils/generateRandomNiceColor";
import ButtonLink from "../ButtonLink";

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
      <div className={styles.mainContent}>
        <h2 className={styles.callOut}>Hey you!</h2>
        <h1 className={styles.title}>Can you read hex colors?</h1>
        <div>
          <ButtonLink className={styles.trainLink} to="train">
            Yeah, take the test!
          </ButtonLink>
          <ButtonLink className={styles.learnLink} to="learn" inverted>
            Nope, learn more
          </ButtonLink>
        </div>
      </div>
      <div className={styles.colorContent} style={{ background: color }}>
        <span className={styles.currentColor}>{color}</span>
      </div>
    </div>
  );
}

export default Home;
