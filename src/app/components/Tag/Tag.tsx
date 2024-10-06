"use client" 
import React, { useState } from 'react';
import styles from './Tag.module.css'
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type VAR = `var(--${string})`


interface TagProps{
    size: "small" | "large",
    color?: RGB | RGBA | HEX | VAR | "transparent",
    activeColor?: RGB | RGBA | HEX | VAR | "transparent",
    textColor?: RGB | RGBA | HEX | VAR | "transparent",
    className?: string,
    children: string,
    icon?: StaticImageData,
    shadow?: boolean,
    isActive?: boolean,
    hoverEffect?: boolean
    /* Ho notato due parametri addizionali (tag, icon) su Figma... */
}

function Tag({size, color="transparent", textColor="#000", className, children, icon, shadow=true, activeColor=color, isActive=false, hoverEffect=false} : TagProps) {
  return (
    <span style={{backgroundColor: isActive ? activeColor: color, color: textColor}} 
     className={
      classNames(
        styles.tag,
        className,
        {[styles.noHoverEffect]: !hoverEffect},
       {[styles.noShadow]: !shadow},
       {[styles.small]: size === "small"},
       {[styles.large]: size === "large"}
        )
    }>
      {icon && <Image src={icon} alt=""/>}
      <span className={styles.text}>{children}</span>
    </span>
  )
}

export default Tag

