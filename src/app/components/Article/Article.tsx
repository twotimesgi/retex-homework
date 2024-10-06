import React, { ReactNode } from "react";
import { StaticImageData } from "next/image";
import styles from "./Article.module.css";
import { url } from "inspector";
import classNames from "classnames";
import SponsoredTag from "../SponsoredTag";
import Tag from "../Tag/Tag";
import Title from "../Title/Title";
import AuthorBox from "../AuthorBox/AuthorBox";
import Cta from "../Cta/Cta";
import PodcastPlayer from "../Player/Player";

/* TODO: Spostare in file types.ts */
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type VAR = `var(--${string})`;

interface ArticleProps {
  backgroundColor?: RGB | RGBA | HEX | VAR | "transparent";
  backgroundImage?: StaticImageData;
  authorName: string;
  authorImage: StaticImageData;
  title: string;
  date: string;
  showCta?: boolean;
  minHeight?: string;
  category?: string;
  categoryColor?: RGB | RGBA | HEX | VAR | "transparent";
  sponsored?: boolean;
  hasAudio?: boolean;
  titleSize: "small" | "medium" | "large" | "xlarge";
  className?: string;
  alignment?: "top-left" | "bottom-left" | "top-right" | "center-right";
  contentMaxWidth?: string;
}

/* TODO: Aggiungere prop per gestire background-position e opacità del filtro*/

function Article({
  backgroundColor = "#ffffff",
  categoryColor = "#fff",
  backgroundImage,
  sponsored = false,
  titleSize,
  hasAudio = false,
  title,
  contentMaxWidth="100%",
  category,
  date,
  authorImage,
  authorName,
  className,
  showCta=true,
  minHeight,
  alignment = "top-left",
}: ArticleProps) {
  return (
    <article
      className={classNames(
        styles.article,
        className,
        { [styles.topLeft]: alignment == "top-left" },
        { [styles.bottomLeft]: alignment == "bottom-left" },
        { [styles.centerRight]: alignment == "center-right" },
        { [styles.topRight]: alignment == "top-right" }
      )}
      style={{
        minHeight: minHeight ?? "unset",
        backgroundImage: backgroundImage
          ? `url(${backgroundImage.src})`
          : "none",
          backgroundColor: backgroundColor,
      }}
    >
      {backgroundImage && <div className={styles.filter}></div>}
      <div className={styles.content} style={{
        maxWidth: contentMaxWidth
      }}>
        {/* importare colori da oggetto con tag e colori  */}
        <div>
          {sponsored && <SponsoredTag />}
          {category && !sponsored && (
            <Tag size="small" color={categoryColor}>
              {category}
            </Tag>
          )}
          {hasAudio && <PodcastPlayer/>}
          <Title size={titleSize} htmlTag="h3">
            {title}
          </Title>
        </div>
        <div>
          <AuthorBox
            authorImage={authorImage}
            authorName={authorName}
            date={date}
          />
          {showCta && <Cta href="#" />}
        </div>
      </div>
      {backgroundImage && <div className={styles.filter}></div>}
    </article>
  );
}

export default Article;
