import React from "react";

import styles from "./Section.module.css";

interface Props {
  title: string;
  description: React.ReactNode;
  widget?: React.ReactNode;
}

const Section: React.SFC<Props> = ({ title, description, widget }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <>{description}</>
      {widget && <div className={styles.widget}>{widget}</div>}
    </div>
  );
};

export default Section;
