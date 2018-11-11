import React from "react";
import cn from "classnames";

import styles from "./Card.module.css";

interface Props {
  className?: string;
}

const Card: React.SFC<Props> = ({ className, children }) => (
  <div className={cn(styles.card, className)}>{children}</div>
);

export default Card;
