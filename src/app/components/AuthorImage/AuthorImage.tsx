import React from 'react';
import styles from './AuthorImage.module.css'
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';

interface AuthorImageProps{
    size: "small" | "large",
    src: StaticImageData,
    className?: string,
    alt?: string
}

function AuthorImage({size, src, className, alt="Author's picture"} : AuthorImageProps) {
  return (
    <div className={
      classNames(
        styles.authorImage,
        className,
       {[styles.small]: size === "small"},
       {[styles.large]: size === "large"}
        )
    }>
        <Image alt={alt} src={src}/>
    </div>
  )
}

export default AuthorImage;

