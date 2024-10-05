import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import skill1image from "../../assets/skills/html.png";
import skill2image from "../../assets/skills/css.png";
import skill3image from "../../assets/skills/react.png";
import skill4image from "../../assets/skills/node.png";
import skill5image from "../../assets/skills/graphql.png";
import skill6image from "../../assets/skills/mongodb.png";
import skill7image from "../../assets/skills/figma.png";
import history1image from "../../assets/history/vitrox.png";
import history2image from "../../assets/history/css.png";

export const Experience = () => {
  const skillImages = {
    'html.png': skill1image,
    'css.png': skill2image,
    'react.png': skill3image,
    'node.png': skill4image,
    'graphql.png': skill5image,
    'mongodb.png': skill6image,
    'figma.png': skill7image
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
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
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
