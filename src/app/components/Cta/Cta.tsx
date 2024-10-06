import React from 'react';
import styles from './Cta.module.css'
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import ArrowRight from '../../public/ui/arrowRight.svg'

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type VAR = `var(--${string})`


interface CtaProps{
    text?: string,
    href?: string,
    textColor?: "white" | "black" 
    external?: boolean
    onClick?: () => void;
    className?: string,
}


function Cta({text, href, external=false, className, onClick, textColor="white"} : CtaProps) {
    const inner = <>
        {text && <span className={styles.ctaText}>{text}</span>}
        <Image src={ArrowRight} className={styles.ctaArrow} alt=""/>
    </>
  if(onClick) return (
    <button style={{color: "#000", filter: textColor == "white" ? "invert(1)" : "none" }} onClick={onClick} className={classNames(
        styles.cta, className)}>
    {inner}
    </button>
  )

  if(external && href) return (
    <a style={{color: "#000", filter: textColor == "white" ? "invert(1)" : "none" }} href={href} className={classNames(
        styles.cta, className)}>
    {inner}
    </a>
  )

  if (href) return (
    <Link style={{color: "#000", filter: textColor == "white" ? "invert(1)" : "none" }} href={href} className={classNames(
        styles.cta, className)}>
    {inner}
    </Link>
  )
  
  return <></>
}

export default Cta

