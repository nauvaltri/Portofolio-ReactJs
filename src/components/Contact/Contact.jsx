import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>  
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:naufaltrisubakti2003@mail.ugm.ac.id">naufaltrisubakti2003@mail.ugm.ac.id</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/naufaltrisubakti">linkedin.com/naufaltrisubakti</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/nauvaltri">github.com/nauvaltri</a>
        </li> 
        <li className={styles.link}>
          <img src={getImageUrl("contact/whatsappIcon.png")} alt="WhatsApp icon" />
          <a href="https://wa.me/+6285600896081">wa.me/naufaltrisubakti</a>
        </li>
      </ul>
    </footer>
  );
};
