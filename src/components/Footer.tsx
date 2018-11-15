import React from "react";

import styles from "./Footer.module.css";
import ExternalLink from "./base/ExternalLink";

const Footer: React.SFC = () => (
  <footer className={styles.container}>
    <div className={styles.content}>
      <div>
        Made with colorlove by <ExternalLink href="https://twitter.com/auareyou">Vincent Lemeunier</ExternalLink>, with
        help from <ExternalLink href="https://twitter.com/auareyou">Aurora</ExternalLink>
      </div>
      <ul className={styles.links}>
        <li>
          <ExternalLink href="http://github.com/kombucha/reading-hex-colors">Github</ExternalLink>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
