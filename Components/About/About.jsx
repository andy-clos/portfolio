import React from "react";

import styles from "./About.module.css";
import profile2 from "../../assets/about/profile2.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={profile2}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>2<sup>nd</sup> Year Computer Science Student</h3>
              <p>
                I am currently pursuing Bachelor of Computer Science at Universiti Sains Malaysia
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Specialization</h3>
              <p>
                I am currently majoring in Intelligent Computing
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Interest</h3>
              <p>
                I am interested in web design and development, data science and machine learning
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
