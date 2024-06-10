import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Naufal</h1>
        <p className={styles.description}>
        I'm a UI/UX Designer,Graphic Designer, Front-End Web Developer, Front-End Mobile Developer, and System Analyst  .
        </p>
        <div className="flex flex-row gap-4 BG-RED-500">

        <a href="mailto:naufaltrisubakti2003@mail.ugm.ac.id" className={styles.contactBtn1}>
          Contact Me
        </a>
        <a href="https://drive.google.com/file/d/1Ka3FQ7EuZOL2xuu99PxVIxi3FMHZ4yuH/view?usp=sharing" className={`${styles.contactBtn2}`} >
          My Portofolio
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/FotoProfile.png")}
        alt="Hero image of me"
        className={`${styles.heroImg}`}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    
    </section>
  );
};
