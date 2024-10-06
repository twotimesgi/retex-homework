import React from 'react';
import Article from '../Article/Article';
import styles from './Grid4.module.css';
import AuthorImage from "../../public/authors/alessandrop.png";
import ArticleImage2 from "../../public/articles/3d1f7235c3e5d419e8302f421ad8b295.jpeg";

export default function ArticleGrid() {
  return (
    <div className={styles.grid}>
      <div className={styles.leftColumn}>
        <Article
          backgroundImage={ArticleImage2}
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
          backgroundImage={ArticleImage2}
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
          backgroundImage={ArticleImage2}
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
          backgroundImage={ArticleImage2}
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