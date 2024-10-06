import React from "react";

import styles from "./Contact.module.css";
import email from "../../assets/contact/emailIcon.png";
import linkedin from "../../assets/contact/linkedinIcon.png";
import github from "../../assets/contact/githubIcon.png";
// import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:andyclos1025@gmail.com">andyclos1025@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          <a rel="noreferrer" href="https://www.linkedin.com/in/andyclos/" target="_blank">linkedin.com/in/andyclos</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a rel="noreferrer" href="https://github.com/andy-clos" target="_blank">github.com/andy-clos</a>
        </li>
      </ul>
    </footer>
  );
};
