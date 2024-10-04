import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div>
    <ul>
        <li><Link href="">Il Gruppo</Link></li>
        <li><Link href="">Note Legali</Link></li>
        <li><Link href="">Chi Siamo</Link></li>
        <li><Link href="">Condizioni d'uso</Link></li>
        <li><Link href="">Privacy</Link></li>
        <li><Link href="">Scrivici</Link></li>
        <li><Link href="">Pubblicità</Link></li>

    </ul>
    </div>
    <div>
    &#64; 1994-2022 Vita Società Editoriale S.p.A.
    </div>
    </footer>
  );
};

export default Footer;
