import React from 'react';
import styles from './Cta.module.css'
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import ArrowRight from '../../public/icons/arrowRight.svg'



interface CtaProps{
    text?: string,
    href?: string,
    external?: boolean
    onClick?: () => void;
    className?: string,
}


function Cta({text, href, external=false, className, onClick} : CtaProps) {
    const inner = <>
        {text && <span className={styles.ctaText}>{text}</span>}
        <Image src={ArrowRight} className={styles.ctaArrow} alt=""/>
    </>
  if(onClick) return (
    <button onClick={onClick} className={classNames(
        styles.cta, className)}>
    {inner}
    </button>
  )

  if(external && href) return (
    <a href={href} className={classNames(
        styles.cta, className)}>
    {inner}
    </a>
  )

  if (href) return (
    <Link href={href} className={classNames(
        styles.cta, className)}>
    {inner}
    </Link>
  )
  
  return <></>
}

export default Cta

