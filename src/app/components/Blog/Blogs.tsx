import React from "react";
import styles from "./Blogs.module.css";
import { StaticImageData } from "next/image";
import PaoloD from "../../public/authors/paolod.png";
import AuthorImage from "../AuthorImage/AuthorImage";
import Title from "../Title/Title";

type Blog = {
  authorImage: StaticImageData;
  authorName: string;
  blogTitle: string;
};

/* TODO: spostare a constants.ts  */
const BLOGS: Blog[] = [
  {
    authorName: "Paolo Dell'Oca",
    authorImage: PaoloD,
    blogTitle: "Il Becco Dell'Oca",
  },
  {
    authorName: "Paolo Dell'Oca",
    authorImage: PaoloD,
    blogTitle: "Il Becco Dell'Oca",
  },
  {
    authorName: "Paolo Dell'Oca",
    authorImage: PaoloD,
    blogTitle: "Il Becco Dell'Oca",
  },
  {
    authorName: "Paolo Dell'Oca",
    authorImage: PaoloD,
    blogTitle: "Il Becco Dell'Oca",
  },
  {
    authorName: "Paolo Dell'Oca",
    authorImage: PaoloD,
    blogTitle: "Il Becco Dell'Oca",
  },
];

export default function Blogs() {
  return (
    <section className={styles.blogs}>
      <div className={styles.titleBox}>
        <Title htmlTag="h3" size="xlarge" textColor="var(--primary)">Il Blog</Title>
      </div>
      {/* Itero solo sui primi 4 elementi */}
      {BLOGS.slice(-5).map((blog : Blog) => {
        return <div className={styles.blog}>
          <AuthorImage size="large" src={blog.authorImage} alt={`${blog.authorName}'s Pic`}/>
          <div className={styles.infoBox}>
            <Title textColor="#000" size="small" htmlTag="h3" className={styles.blogTitle}>{blog.blogTitle}</Title>
            <span className={styles.authorName}>{blog.authorName}</span>
          </div>
        </div>
      })}
    </section>
  );
}
