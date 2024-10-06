import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import UserIcon from "../../public/ui/user.svg";
import Toggle from "../Toggle/Toggle";
import Link from "next/link";
import MenuIcon from "../../public/ui/menu.svg"
import SearchIcon from "../../public/ui/search.svg"
const Header = () => {
    /* check active category */
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.links}>
          <a href="#">Contribuisci</a>
          <a href="#">Abbonati</a>
        </div>
        <Link href="#" className={styles.login}>
          <Image src={UserIcon} alt="" />
          <span>Accedi</span>
        </Link>
      </div>
      <div className={styles.middle}>
        {/* TODO: Implementare onClick menu e ricerca */}
        <div className={styles.left}>
            <button>
            <Image src={MenuIcon} alt=""/>
            </button>
        </div>
       
        <div className={styles.right}>
            <button>
            <Image src={SearchIcon} alt=""/>
            </button>
        </div>
      </div>

      <div className={styles.bottom}>
        <nav>
          <ul>
            <li className={styles.active}>
              <Link href="#">Tutti i temi</Link>
            </li>
            <li>
              <Link href="#">Ambiente</Link>
            </li>
            <li>
              <Link href="#">Economia</Link>
            </li>
            <li>
              <Link href="#">Mondo</Link>
            </li>
            <li>
              <Link href="#">Non Profit</Link>
            </li>
            <li>
              <Link href="#">Politica</Link>
            </li>
            <li>
              <Link href="#">Società</Link>
            </li>
            <li>
              <Link href="#">Welfare</Link>
            </li>
          </ul>
        </nav>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
