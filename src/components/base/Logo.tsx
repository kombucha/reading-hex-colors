import React from "react";
import cn from "classnames";

import styles from "./Logo.module.css";

interface Props {
  className?: string;
  size?: number;
}

const Logo: React.SFC<Props> = ({ className, size = 48 }) => (
  <div className={className}>
    <div className={cn(styles.container)} style={{ width: size, height: size }}>
      <div className={styles.red} />
      <div className={styles.green} />
      <div className={styles.blue} />
    </div>
  </div>
);

export default Logo;
