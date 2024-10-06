"use client";
import {useState} from "react";
import styles from "./Player.module.css";
import Image from "next/image";
import PlayIcon from "../../public/ui/play.svg";
import PauseIcon from "../../public/ui/pause.svg";


/* TODO: Valori harcodati da rimuovere*/
const LENGTH_IN_SECONDS = 100;
const CURRENT_TIME_IN_SECONDS = 10;

/* Thanks ChatGPT :) */
function formatPlaytime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = secs.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function PodcastPlayer() {
  const [status, setStatus] = useState<"play" | "pause">("pause");

  const handleAction = () => {
    setStatus((curr) => (curr == "play" ? "pause" : "play"));
  };

  /* TODO: implementare funzionalità */
  const currentTimePercentage =
    (LENGTH_IN_SECONDS / CURRENT_TIME_IN_SECONDS) * 100;

  return (
    <div className={styles.player}>
      <div className={styles.actionBox}>
        <button onClick={handleAction}>
          {status == "pause" && <Image src={PlayIcon} alt="pause" />}
          {status == "play" && <Image src={PauseIcon} alt="pause"></Image>}
        </button>
      </div>
      <div className={styles.timeSelectorBox}>
      </div>
      <span className={styles.time}>
        -{formatPlaytime(LENGTH_IN_SECONDS - CURRENT_TIME_IN_SECONDS)}
      </span>
    </div>
  );
}

export default PodcastPlayer;
