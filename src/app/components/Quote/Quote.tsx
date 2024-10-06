import React from 'react';
import styles from './Quote.module.css';
import Title from '../Title/Title';

export default function Quote() {
  return (
    <section className={styles.quote}>
      <Title size="large" htmlTag="h1" textColor="#fff" className={styles.title}>Essere troppo seri non è cosa molto seria</Title>
      <span className={styles.author}>[ Detto Africano ]</span>
    </section>
  );
}