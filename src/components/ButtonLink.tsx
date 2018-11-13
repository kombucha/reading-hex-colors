import React from "react";
import { Link, LinkProps } from "@reach/router";
import cn from "classnames";

import styles from "./ButtonLink.module.css";

interface Props extends LinkProps<any> {
  inverted?: boolean;
}

const ButtonLink: React.SFC<Props> = ({ children, className, inverted, ...otherProps }) => (
  <Link {...otherProps as any} className={cn(styles.link, inverted && styles.inverted, className)}>
    {children}
  </Link>
);

export default ButtonLink;
