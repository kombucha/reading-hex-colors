import React from "react";

import styles from "./Profit.module.css";

const Profit: React.SFC = () => (
  <div>
    <h2 className={styles.title}>And...Profit!</h2>
    <div style={{ width: "100%", height: 0, paddingBottom: "57%", position: "relative" }}>
      <iframe
        src="https://giphy.com/embed/Is1O1TWV0LEJi"
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

export default Profit;
