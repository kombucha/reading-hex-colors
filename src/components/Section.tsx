import React from "react";

import styles from "./Section.module.css";

interface Props {
  step?: number;
  title: string;
  dim?: boolean;
}

const Section: React.SFC<Props> = ({ step = -1, title, dim, children }) => (
  <div className={dim ? styles.dimmed : undefined}>
    {step !== -1 && <h3 className={styles.stepNumber}>Step {step}</h3>}
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Section;
