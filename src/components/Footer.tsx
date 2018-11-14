import React from "react";

import styles from "./Footer.module.css";
import ExternalLink from "./base/ExternalLink";

const Footer: React.SFC = () => (
  <footer className={styles.container}>
    <div className={styles.content}>
      <div>Made with colorlove by Vincent Lemeunier</div>
      <ul className={styles.links}>
        <li>
          <ExternalLink href="http://github.com/kombucha">Github</ExternalLink>
        </li>
        <li>
          <ExternalLink href="http://twitter.com/mrkombu">Twitter</ExternalLink>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
