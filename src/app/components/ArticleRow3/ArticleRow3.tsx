import React, { ReactNode } from "react";
import styles from "./ArticleRow3.module.css";
import classNames from "classnames";
import Article from "../Article/Article";
import Tag from "../Tag/Tag";
import SponsoredIcon from "../../public/ui/sponsored.svg";
import ArticleImage2 from "../../public/articles/694ab24ec3d3be255190e79672905561.jpeg";
import ArticleImage from "../../public/articles/387e44379e5e0554b39b5ff23f335d3f.jpeg";

import Title from "../Title/Title";
import AuthorBox from "../AuthorBox/AuthorBox";
import AuthorImage from "../../public/authors/paolod.png";
import Cta from "../Cta/Cta";
/* Spostare in file types.ts */
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type VAR = `var(--${string})`;

interface ArticleRowProps {
  className?: string;
}

function ArticleRow3({ className }: ArticleRowProps) {
  return (
    <div className={classNames(styles.articleGrid, className)}>
      <Article className={styles.article} backgroundColor="var(--primary)">
      <div className={styles.topBox}><Tag size="small" shadow={true} color="#FFF">
         Progetto Arca
        </Tag>
        <Title htmlTag="h3" textColor="#fff" size="medium">
        “Qui Odessa”, fotografie, progetti e solidarietà
        </Title>
        </div>
        <div className={styles.bottomBox}>
          <AuthorBox
            textColor="white"
            authorName="Redazione"
            authorImage={AuthorImage}
            date="29 Giugno 2022"
          />
          <Cta textColor="white" href="#"></Cta>
        </div>
      </Article>
      <Article className={styles.article} backgroundImage={ArticleImage}>
      <div className={styles.topBox}> <Tag size="small" shadow={true} color="#F0E2F1">
          Economia Civile
        </Tag>
        <Title htmlTag="h3" size="medium">
          “Co-agitiamo”, Tiggiano una cooperativa di comunità contro lo spopolamento
        </Title></div>
        <div className={styles.bottomBox}><AuthorBox
          authorName="Emiliano Moccia"
          authorImage={AuthorImage}
          date="12 Luglio 2022"
        />
        <Cta textColor="white" href="#"></Cta>
        </div>
      </Article>
      <Article className={styles.article} backgroundImage={ArticleImage2}>
      <div className={styles.topBox}><Tag size="small" color="#E2f0f1">
          Adolescenti
        </Tag>
        <Title htmlTag="h3" size="medium">
        Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne
        </Title>
        </div>
        <div className={styles.bottomBox}><AuthorBox
          authorName="Luca Cereda"
          authorImage={AuthorImage}
          date="13 Luglio 2022"
        />
        <Cta textColor="white" href="#"></Cta>
        </div>
      </Article>
    </div>
  );
}

export default ArticleRow3;
