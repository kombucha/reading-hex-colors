import React from "react";

import styles from "./Card.module.css";

const Card: React.SFC = ({ children }) => <div className={styles.card}>{children}</div>;

export default Card;
