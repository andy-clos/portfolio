import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import skill1image from "../../assets/skills/react.png";
import skill2image from "../../assets/skills/bootstrap.png";
import skill3image from "../../assets/skills/html.png";
import skill4image from "../../assets/skills/css.png";
import skill5image from "../../assets/skills/vscode.png";
import skill6image from "../../assets/skills/github.png";
import skill7image from "../../assets/skills/figma.png";
import skill8image from "../../assets/skills/tailwindcss.png";
import skill9image from "../../assets/skills/git.png";
import skill10image from "../../assets/skills/gitlab.png";
import skill11image from "../../assets/skills/python.png";
import skill12image from "../../assets/skills/cpp.png";
import skill13image from "../../assets/skills/java.png";
import skill14image from "../../assets/skills/javascript.png";
import skill15image from "../../assets/skills/typescript.png";
import skill16image from "../../assets/skills/anaconda.png";
import skill17image from "../../assets/skills/firebase.png";
import skill18image from "../../assets/skills/mysql.png";
import skill19image from "../../assets/skills/oracle.png";
import skill20image from "../../assets/skills/jira.png";
import history1image from "../../assets/history/vitrox.png";
import history2image from "../../assets/history/css.png";

export const Experience = () => {
  const skillImages = {
    'react.png': skill1image,
    'bootstrap.png': skill2image,
    'html.png': skill3image,
    'css.png': skill4image,
    'vscode.png': skill5image,
    'github.png': skill6image,
    'figma.png': skill7image,
    'tailwindcss.png': skill8image,
    'git.png': skill9image,
    'gitlab.png': skill10image,
    'python.png': skill11image,
    'cpp.png': skill12image,
    'java.png': skill13image,
    'javascript.png': skill14image,
    'typescript.png': skill15image,
    'anaconda.png': skill16image,
    'firebase.png': skill17image,
    'mysql.png': skill18image,
    'oracle.png': skill19image,
    'jira.png': skill20image
  };

  const historyImages = {
    'vitrox.png': history1image,
    'css.png': history2image,
  };
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                <img
                  src={skillImages[skill.imageSrc]}
                  alt={skill.title}
                />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyImages[historyItem.imageSrc]}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3><b>{`${historyItem.role},`}</b></h3>
                  <h3><b>{`${historyItem.organisation}`}</b></h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
