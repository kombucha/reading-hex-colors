import React from "react";
import cn from "classnames";

import styles from "./Card.module.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, Props>(({ className, ...rest }, ref) => (
  <div {...rest} ref={ref} className={cn(styles.card, className)} />
));

export default Card;
