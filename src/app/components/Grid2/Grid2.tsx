import React from 'react';
import ArticleImage2 from '../../public/articles/694ab24ec3d3be255190e79672905561.jpeg';
import ArticleImage3 from '../../public/articles/387e44379e5e0554b39b5ff23f335d3f.jpeg';
import ArticleImage4 from '../../public/articles/dd3e9b01ec8fa348b61f1f5677f898ed.jpeg';
import ArticleImage5 from '../../public/articles/f21f938a0b40db341f1e0c17dc4c52cb.jpeg';
import AuthorImage from "../../public/authors/paolod.png";
import Article from '../Article/Article';
import styles from './Grid2.module.css';

export default function ArticleGrid() {
  return (
    <div className={styles.grid}>
      <Article
        className={styles.article}
        backgroundColor="#FF4136"
        title='"Qui Odessa", fotografie, progetti e solidarietà'
        titleSize="medium"
        category="PROGETTO ARCA"
        categoryColor="#FFFFFF"
        authorName="Di Redazione"
        authorImage={AuthorImage}
        date="13 Luglio 2022"
        alignment="top-left"
      />
      <Article
        className={styles.article}
        backgroundImage={ArticleImage2}
        title="Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne"
        titleSize="medium"
        category="ADOLESCENTI"
        categoryColor="#FFFFFF"
        authorName="Di Luca Cereda"
        authorImage={AuthorImage}
        date="13 Luglio 2022"
        alignment="top-left"
      />
      <Article
        className={styles.article}
        backgroundImage={ArticleImage3}
        title='"Co-agitiamo", Tiggiano una cooperativa di comunità contro lo spopolamento'
        titleSize="medium"
        category="ECONOMIA CIVILE"
        categoryColor="#FFFFFF"
        authorName="Di Giacomo Moccia"
        authorImage={AuthorImage}
        date="13 Luglio 2022"
        alignment="top-left"
      />
      <Article
        className={styles.article}
        backgroundImage={ArticleImage4}
        title="Troppi abusi nello sport minorile, il governo interviene"
        hasAudio={true}
        titleSize="medium"
        category="SPORT"
        categoryColor="#FFFFFF"
        authorName="Di Diletta Grella"
        authorImage={AuthorImage}
        date="7 Luglio 2022"
        alignment="top-left"
      />
      <Article
        className={styles.articleWide}
        backgroundImage={ArticleImage5}
        title="Donne e nuove generazioni: con loro riparte l'Italia"
        titleSize="large"
        category="SOCIETÀ"
        categoryColor="#FFFFFF"
        authorName="Di Anna Spena"
        authorImage={AuthorImage}
        date="7 Luglio 2022"
        alignment="top-right"
        contentMaxWidth='27.3125rem'
      />
    </div>
  );
}