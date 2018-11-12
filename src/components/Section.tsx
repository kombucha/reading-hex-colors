import React from "react";

import styles from "./Section.module.css";

interface Props {
  title: string;
  description: React.ReactNode;
  widget?: React.ReactNode;
  doesntApply?: boolean;
}

const Section: React.SFC<Props> = ({ title, description, widget, doesntApply }) => {
  return (
    <div className={doesntApply ? styles.doesntApply : undefined}>
      <h2 className={styles.title}>{title}</h2>
      <>{description}</>
      {widget && <div className={styles.widget}>{widget}</div>}
    </div>
  );
};

export default Section;
