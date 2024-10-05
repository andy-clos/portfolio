import React from "react";
import styles from "./Hero.module.css";
import profile from "../../assets/hero/Profile.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, there! I am Andyclos! 👨🏻‍💻</h1>
        <p className={styles.description}>
          I am Year 2 Computer Science Student at Universiti Sains
          Malaysia!Welcome to my portfolio! I hope you enjoy it!
        </p>
        <a href="mailto:lim" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={profile} alt="Profile" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
