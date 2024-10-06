import Image from "next/image";
import styles from "./page.module.css";
import SponsoredTag from "./components/SponsoredTag";
import Categories from "./components/Categories/Categories";
import Banner from "./components/Banner/Banner";
import Quote from "./components/Quote/Quote";
import Blogs from "./components/Blog/Blogs";
import Article from "./components/Article/Article";
import AuthorImage from "./public/authors/paolod.png";
import ArticleImage1 from "./public/articles/44146596a39e532d863a717f24411c63.jpeg"
import ArticleImage2 from "./public/articles/b6e33ccd8199114020efce75167974ff.png";

import Grid1 from "./components/Grid1/Grid1";
import Grid2 from "./components/Grid2/Grid2";
import Grid3 from "./components/Grid3/Grid3";
import Grid4 from "./components/Grid4/Grid4";
export default function Home() {
  return (
   <main>
          <Categories/>
          <Article 
            authorImage={AuthorImage} 
            minHeight="31.625rem" 
            alignment="bottom-left" 
            titleSize="xlarge"  
            category="migranti" 
            title="Roccella Jonica, la Lampedusa che l'Italia ignora" 
            date="20 luglio 2022" authorName="Marco Divella" 
            backgroundImage={ArticleImage1} 
            showCta={false}
            contentMaxWidth="51.4375rem"
            />
          <Grid1/>
          <Banner/>
          <Grid2/>
          <Quote/>
          <Blogs/>
          <Article 
            authorImage={AuthorImage} 
            minHeight="34.875rem" 
            alignment="center-right" 
            titleSize="large"  
            category="impresa sociale" 
            title="La Kasbah mazarese nella quale si gusta la cultura araba" 
            date="20 luglio 2022" authorName="Marco Divella" 
            backgroundImage={ArticleImage2} 
            showCta={true}
            contentMaxWidth="30.9375rem"
            />
          <Grid3/>
          <Grid4/>
   </main>
  );
}
