import React from "react";
import { RouteComponentProps } from "@reach/router";

import styles from "./Train.module.css";

type Props = RouteComponentProps;

function Train(_props: Props) {
  return (
    <div className={styles.container}>
      <h1>COMING SOON</h1>
      <div style={{ width: "100%", height: 0, paddingBottom: "100%", position: "relative" }}>
        <iframe
          src="https://giphy.com/embed/JIX9t2j0ZTN9S"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Train;
