
import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to My Bookstore</h1>
      <p className={styles.description}>
        Explore a world of books from classics to bestsellers, all curated with you in mind.
      </p>
      <section className={styles.features}>
        <article className={styles.featureCard}>
          <h2>Wide Collection</h2>
          <p>Thousands of titles across genres to satisfy every reader's taste.</p>
        </article>
        <article className={styles.featureCard}>
          <h2>Easy Shopping</h2>
          <p>Seamless browsing, simple checkout, and fast delivery.</p>
        </article>
        <article className={styles.featureCard}>
          <h2>Trusted Service</h2>
          <p>Your satisfaction is our priority — enjoy hassle-free returns.</p>
        </article>
      </section>
    </main>
  );
}

export default Home;
