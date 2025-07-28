import React from 'react';
import style from './Home.module.css'
function Home() {
  return (
    <main className={style.container}>
      <h1 className={style.h1}>Welcome to My Bookstore</h1>
      <p className={style.Home}>
        Discover an extensive collection of books from various genres. Enjoy browsing through our catalog,
        adding books to your cart, and exploring detailed book information.
      </p>
      <p className={style.Home}>
        Whether you’re an avid reader or just getting started, our bookstore offers something for everyone.
      </p>
    </main>
  );
}

export default Home;
