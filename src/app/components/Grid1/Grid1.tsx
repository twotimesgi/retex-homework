import React from 'react';
import Article from '../Article/Article';
import styles from './Grid1.module.css';
import AuthorImage from "../../public/authors/paolod.png";
import ArticleImage1 from "../../public/articles/6b12b5889d6ddad962a628409ed1fb35.png"
import ArticleImage2 from "../../public/articles/414203738595db29ebe106300bc6ffb0.jpeg"
import ArticleImage3 from "../../public/articles/14d45989ba68e34f07fdb3b34f4a5775.png"


export default function Grid1() {
  return (
    <div className={styles.grid}>
      <Article
        className={styles.mainArticle}
        backgroundImage={ArticleImage1}
        title="Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura"
        titleSize="large"
        category="ALLARMI"
        categoryColor="#E2F1E8"
        authorName="Di Ugo Lombi"
        authorImage={AuthorImage}
        date="14 Luglio 2022"
        alignment="bottom-left"
        contentMinHeight="40%"
      />
      <Article
        className={styles.topRightArticle}
        backgroundImage={ArticleImage2}
        title="Gli star-tupper? Li trovi al bistrot. Così il DumBo incuba relazioni"
        titleSize="medium"
        category="ESPERIMENTI"
        categoryColor="#E2F0F1"
        authorName="Di Diletta Grella"
        authorImage={AuthorImage}
        date="14 Luglio 2022"
        alignment="top-left"
        hasAudio={true}
      />
      <Article
        className={styles.bottomRightArticle}
        backgroundImage={ArticleImage3}
        title="Nelle città italiane tutti in piazza per e con Kiev"
        titleSize="medium"
        category="UCRAINA"
        categoryColor="#F1DADA"
        authorName="Di Anna Spena"
        authorImage={AuthorImage}
        date="14 Luglio 2022"
        alignment="bottom-left"
      />
    </div>
  );
}