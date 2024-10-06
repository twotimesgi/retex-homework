import React, { ReactNode } from "react";
import styles from "./ArticleRow4.module.css";
import classNames from "classnames";
import Article from "../Article/Article";
import Tag from "../Tag/Tag";
import SponsoredIcon from "../../public/ui/sponsored.svg";
import ArticleImage from "../../public/articles/4b06ac6a9746215a07da8b9922bb27af.jpeg";
import ArticleImage2 from "../../public/articles/3d1f7235c3e5d419e8302f421ad8b295.jpeg";
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

function ArticleRow4({ className }: ArticleRowProps) {
  return (
    <div className={classNames(styles.articleGrid, className)}>
      <Article className={styles.article} backgroundColor="#fff">
        <div className={styles.topBox}><Tag
          size="small"
          icon={SponsoredIcon}
          shadow={false}
          textColor="var(--primary)"
        >
          Sponsored
        </Tag>
        <Title htmlTag="h3" textColor="#000" size="medium">
          Sostenibilità sociale: accordo tra Dynamo Academy e Acsi
        </Title>
        </div>
        <div className={styles.bottomBox}>
          <AuthorBox
            textColor="black"
            authorName="Francesco Palazzo"
            authorImage={AuthorImage}
            date="29 Giugno 2022"
          />
          <Cta textColor="black" href="#"></Cta>
        </div>
      </Article>
      <Article className={styles.article} backgroundImage={ArticleImage}>
        <Tag size="small" shadow={true} color="#F1DADA">
          Persone
        </Tag>
        <Title htmlTag="h3" size="medium">
          Uccisa ad Haiti suor Luisa, era l'angelo dei bambini
        </Title>
        <div className={styles.bottomBox}><AuthorBox
          authorName="Francesco Palazzo"
          authorImage={AuthorImage}
          date="29 Giugno 2022"
        />
        <Cta textColor="white" href="#"></Cta>
        </div>
      </Article>
      <Article className={styles.article} backgroundColor="var(--primary)">
        <Tag size="small" color="#fff">
          Networking
        </Tag>
        <Title htmlTag="h3" size="medium">
          Il fundraising in rotta verso Giardini-Naxos
        </Title>
        <div className={styles.bottomBox}><AuthorBox
          authorName="Francesco Palazzo"
          authorImage={AuthorImage}
          date="29 Giugno 2022"
        />
        <Cta textColor="white" href="#"></Cta>
        </div>
      </Article>
      <Article className={styles.article} backgroundImage={ArticleImage2}>
        {/* TODO import categories and match textColor */}
        <Tag size="small" color="#E2F0F1">
          Società civile
        </Tag>
        <Title htmlTag="h3" size="medium">
          Lisa, il modello Croce Rossa per l'inclusione lavorativa
        </Title>
        <div className={styles.bottomBox}><AuthorBox
          authorName="Francesco Palazzo"
          authorImage={AuthorImage}
          date="29 Giugno 2022"
        />
        <Cta textColor="white" href="#"></Cta>
        </div>
      </Article>
    </div>
  );
}

export default ArticleRow4;
