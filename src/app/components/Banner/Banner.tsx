import React from 'react';
import styles from './Banner.module.css';
import Cta from '../Cta/Cta';
import Title from '../Title/Title';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <Title htmlTag='h3' size='large' textColor="#000" className={styles.title}>Il tuo supporto è fondamentale</Title>
      <Cta textColor="black" text='Dai il tuo contributo' href='#'/>
    </section>
  );
}