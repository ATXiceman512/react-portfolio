import React from "react";
import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.heading}>
                <h2 aria-label="About me section">About Me</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.content__img}>
                    <img
                        src="https://i.ibb.co/hy9BGQC/headshot.jpg"
                        alt="..."
                        title="Justin Beard Portfolio Image"
                    />
                </div>

                <h3 className={styles.content__header}>
                    I'm a Full Stack Web Developer.
                </h3>
                <p>
                Hello, my name is Justin Beard and currently reside in Florence, Arizona. 
                </p>
                <p>
                Currently attending the University of Arizona coding bootcamp for full-stack web development 
                and expect to graduate at the end of May.
                </p>
                <p>
                I am working as a Java API Software developer for a tele-communications company, my current role includes managing the releationship between our CRM and Billing Software.
                </p>
            </div>
        </section>
    );
};

export default About;
