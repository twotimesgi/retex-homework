import React from "react";
import { StaticImageData } from "next/image";
import AuthorImage from "../AuthorImage/AuthorImage";
import styles from "./AuthorBox.module.css";
import classNames from "classnames";

interface AuthorBoxProps {
  alignment?: "horizontal" | "vertical";
  authorImage: StaticImageData;
  authorName: string;
  textColor?: "white" | "black"
  date?: string;
  className?: string;
}

function AuthorBox({
  alignment = "horizontal",
  authorImage,
  authorName,
  textColor = "white",
  date,
  className
}: AuthorBoxProps) {
  return (
    <div 
        style={{color: textColor}}
    className={classNames(
        styles.authorBox,
        className,
        {[styles.vertical]: alignment == "vertical"}
        )}>
      <AuthorImage
        size="small"
        alt={`${authorName}'s image`}
        src={authorImage}
      />
      <div className={styles.dataBox}>
        <span className={styles.authorName}>{authorName}</span>
        {date && date != "" && <span className={styles.date}>{date}</span>}
      </div>
    </div>
  );
}

export default AuthorBox;
