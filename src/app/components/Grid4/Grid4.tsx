import React from 'react';
import Article from '../Article/Article';
import styles from './Grid4.module.css';
import AuthorImage from "../../public/authors/alessandrop.png";
import ArticleImage1 from "../../public/articles/062fdfa20bef29e54564611b02e8a5ab.jpeg";
import ArticleImage5 from "../../public/articles/c0da822e4e1ce4483ec38490a81158c2.png";
import ArticleImage2 from "../../public/articles/8082eb66b7d548ad6812c00f8a8a3d69.jpeg";
import ArticleImage3 from "../../public/articles/b3cdc12c579a217665d9ac44216ffc79.jpeg";
import ArticleImage4 from "../../public/articles/fc3e863b2eb77ffc9385becbf47b5d54.jpeg";



export default function ArticleGrid() {
  return (
    <div className={styles.grid}>
      <div className={styles.leftColumn}>
        <Article
        padding='medium'
          backgroundImage={ArticleImage1}
          title="Gli anziani del Sicomoro spopolano su TikTok"
          titleSize="medium"
          category="INNOVAZIONE"
          categoryColor="#FFFFFF"
          authorName="Di Luigi Alfonso"
          authorImage={AuthorImage}
          date="1 Luglio 2022"
          alignment="bottom-left"
        />
        <Article
                padding='medium'

          backgroundImage={ArticleImage2}
          title="'Emergenza sordi': quando un'app ti salva la vita"
          titleSize="medium"
          category="DISABILITÀ"
          categoryColor="#FFFFFF"
          authorName="Di Sara Bellingeri"
          authorImage={AuthorImage}
          date="1 Luglio 2022"
          alignment="bottom-left"
        />
        <Article
                padding='medium'

          backgroundImage={ArticleImage3}
          title="Diego, il fruttivendolo che ha scelto la cooperazione sociale"
          titleSize="medium"
          category="TRAIETTORIE"
          categoryColor="#FFFFFF"
          authorName="Di Giampaolo Cerri"
          authorImage={AuthorImage}
          date="1 Luglio 2022"
          alignment="bottom-left"
        />
        <Article
                padding='medium'

          backgroundImage={ArticleImage4}
          title="Pedalare 'Sicily Coast to Coast' per essere più inclusivi"
          titleSize="medium"
          category="SOCIALE"
          categoryColor="#FFFFFF"
          authorName="Di Giovanni Gamba"
          authorImage={AuthorImage}
          date="1 Luglio 2022"
          alignment="bottom-left"
        />
      </div>
      <div className={styles.rightColumn}>
        <Article
          backgroundImage={ArticleImage5}
          title="Leopoli, andata + ritorno"
          titleSize="large"
          category="UCRAINA"
          categoryColor="#FFFFFF"
          authorName="Di Gilda Sciortino"
          authorImage={AuthorImage}
          date="14 Luglio 2022"
          alignment="bottom-left"
          contentMinHeight='min-content'
        />
      </div>
    </div>
  );
}