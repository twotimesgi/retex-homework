import React from "react";
import Article from "../Article/Article";
import styles from "./Grid3.module.css";

// Assume these images are imported from their respective paths
import ArticleImage1 from "../../public/articles/4b06ac6a9746215a07da8b9922bb27af.jpeg";
import ArticleImage2 from "../../public/articles/3d1f7235c3e5d419e8302f421ad8b295.jpeg";
import AuthorImage from "../../public/authors/alessandrop.png";

export default function Grid3() {
  return (
    <div className={styles.grid}>
      <Article
        backgroundColor="#FFFFFF"
        title="Sostenibilità sociale: accordo tra Dynamo Academy e Acsi"
        titleSize="medium"
        category="SPONSORED"
        categoryColor="#FF0000"
        textColor="#000"
        authorName="Di Dynamo Academy"
        authorImage={AuthorImage}
        alignment="top-left"
        sponsored={true}
      />
      <Article
        backgroundImage={ArticleImage1}
        title="Uccisa ad Haiti suor Luisa, era l'angelo dei bambini"
        titleSize="medium"
        category="PERSONE"
        categoryColor="#f1dada"
        authorName="Di Lucia Capuzzi"
        authorImage={AuthorImage}
        date="3 Luglio 2022"
        alignment="top-left"
      />
      <Article
        backgroundColor="var(--primary)"
        title="Il fundraising in rotta verso Giardini-Naxos"
        titleSize="medium"
        category="NETWORKING"
        categoryColor="#FFFFFF"
        authorName="Di Redazione"
        authorImage={AuthorImage}
        date="3 Luglio 2022"
        alignment="top-left"
      />
      <Article
        backgroundImage={ArticleImage2}
        title="Lisa, il modello Croce Rossa per l'inclusione lavorativa"
        titleSize="medium"
        category="SOCIETÀ CIVILE"
        categoryColor="#FFFFFF"
        authorName="Di Francesco Palazzo"
        authorImage={AuthorImage}
        date="29 Giugno 2022"
        alignment="top-left"
      />
    </div>
  );
}
