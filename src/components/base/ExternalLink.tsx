import React from "react";

import styles from "./ExternalLink.module.css";

interface Props {
  href: string;
}

const ExternalLink: React.SFC<Props> = ({ href, children }) => (
  <a className={styles.link} href={href} rel="noopener" target="_blank">
    {children}
  </a>
);
export default ExternalLink;
