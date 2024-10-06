import React, { ReactNode } from "react";
import { StaticImageData } from "next/image";
import styles from "./Article.module.css";
import { url } from "inspector";
import classNames from "classnames";

/* Spostare in file types.ts */
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type VAR = `var(--${string})`;

interface ArticleProps {
  backgroundColor?: RGB | RGBA | HEX | VAR | "transparent";
  backgroundImage?: StaticImageData;
  className?: string;
  children: ReactNode;
}

function Article({
  backgroundColor = "#ffffff",
  backgroundImage,
  children,
  className,
}: ArticleProps) {
  return (
    <article
      className={classNames(styles.article, className)}
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage
          ? `url(${backgroundImage.src})`
          : "none",
      }}
    >
        <div className={styles.content}>
      {children}
      </div>
      {backgroundImage && <div className={styles.filter}></div>}
    </article>
  );
}

export default Article;
