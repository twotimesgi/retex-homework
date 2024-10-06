import React from 'react';
import styles from './Categories.module.css';
import Tag from '../Tag/Tag';
import Link from 'next/link';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type VAR = `var(--${string})`

type Category = {
    categoryName: string;
    categoryColor: RGB | RGBA | HEX | VAR | "transparent";
    isActive: boolean;
    categoryUrl: string;
}

/* TODO: move to constants.ts file */
const categories : Category[] = [
    {
        categoryName: "Ambiente",
        categoryColor: "#E2F1E8",
        isActive: false,
        categoryUrl: "#"
    },
    {
        categoryName: "Economia",
        categoryColor: "#E2E8F1",
        isActive: false,
        categoryUrl: "#"
    },
    {
        categoryName: "Mondo",
        categoryColor: "#F1DADA",
        isActive: true,
        categoryUrl: "#"
    },
    {
        categoryName: "Non profit",
        categoryColor: "#F0E2F1",
        isActive: false,
        categoryUrl: "#"

    },
    {   
        categoryName: "Politica",
        categoryColor: "#F1F1E2",
        isActive: false,
        categoryUrl: "#"


    },
    {
        categoryName: "Società",
        categoryColor: "#E2F0F1",
        isActive: false,
        categoryUrl: "#"


    },
    {
        categoryName: "Welfare",
        categoryColor: "#F5E6E0",
        isActive: false,
        categoryUrl: "#"

    }
];

export default function Categories() {
  return (
    <section className={styles.categories}>
        { /* h1 o h2 ? */ }
      <h2 className={styles.title}>Tutti i temi</h2>
      <div className={styles.categoriesBox}>
        {categories.map((category : Category) => (
          <Link href={category.categoryUrl}><Tag hoverEffect={true} isActive={category.isActive} size="large" key={category.categoryName} activeColor={category.categoryColor} color='#fff'>{category.categoryName}</Tag></Link>
        ))}
      </div>
    </section>
  );
}