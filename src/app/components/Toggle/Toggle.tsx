"use client" 
import { useState } from "react";
import styles from "./Toggle.module.css";
import Image from "next/image";
import TextIcon from "../../public/ui/text.svg";
import ImageIcon from "../../public/ui/image.svg";
import classNames from "classnames";

type ToggleOptions = "image" | "text";

const Toggle = () => {
  const [selected, setSelected] = useState<ToggleOptions>("image");

  const handleSelection = () => {
    setSelected((prev) => prev == "image" ? "text" : "image")
    /* TODO: implementare */
  };

  return (
    <div className={styles.toggle}>
      <button onClick={handleSelection} className={classNames({
        [styles.selected]: selected == "text"
      })}>
        <Image src={TextIcon} alt="text"/>
      </button>
      <button onClick={handleSelection} className={classNames({
        [styles.selected]: selected == "image"
      })}>
        <Image src={ImageIcon} alt="image"/>
      </button>
    </div>
  );
};

export default Toggle;
