
import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.paragraph}>
        At My Bookstore, we are passionate about bringing readers and books together.
        Our mission is to create an online space where book lovers find their perfect next read.
      </p>
      <p className={styles.paragraph}>
        We carefully select books from a diverse range of genres — classics, new releases, and hidden gems.
        We're committed to making your shopping experience enjoyable and reliable.
      </p>
      <p className={styles.paragraph}>
        Thank you for trusting us. We hope you find stories that inspire and delight.
      </p>
    </main>
  );
}

export default About;
