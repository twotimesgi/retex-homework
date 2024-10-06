import classNames from "classnames";
import styles from "./Title.module.css"
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type VAR = `var(--${string})`
interface TitleProps{
    children: string,
    textColor?: RGB | RGBA | HEX | VAR | "transparent",
    size: "small" | "medium" | "large"| "xlarge",
    htmlTag: string,
    className?: string
}

// Aggiungere proprietà per controllare overflow 
function Title({children, textColor="#fff", size="medium", htmlTag, className} : TitleProps) {
    let HeadingTag: keyof JSX.IntrinsicElements = htmlTag as keyof JSX.IntrinsicElements;
      return <HeadingTag className={classNames(
        styles.title,
        className,

        {[styles.s]: size == "small"},
        {[styles.m]: size == "medium"},
        {[styles.l]: size == "large"},
        {[styles.xl]: size == "xlarge"}
      )}
      style={{color: textColor}}>{children}</HeadingTag>
}

export default Title

