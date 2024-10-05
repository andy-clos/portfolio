import React from "react";
import styles from "./Hero.module.css";
import profile from "../../assets/hero/Profile.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, there!</h1>
        <h1 className={styles.title}>I am Andyclos!</h1>
        <p className={styles.description}>
          A passionate Computer Science student.
        </p>
        <a href="mailto:andyclos1025@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={profile} alt="Profile" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
