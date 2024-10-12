import { useState } from "react";
import cx from "classnames";
import data from "../../../public/data.json";
import { TrendingList } from "../../components/trendingList";
import { Menu } from "../../components/menu";
import { formatDuration } from "../../utils/formatDuration";

import styles from "./styles.module.scss";

export const HomePage = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const { Featured, TrendingNow } = data;
  return (
    <div onClick={() => setMenu(false)} className={styles.layout}>
      <Menu open={menu} onOpen={() => setMenu(true)} />
      <div className={styles.central}>
        <span className={styles.subtitle}>MOVIE</span>
        <h1 className={styles.title}>{Featured.Title}</h1>
        <img
          width={683}
          height={84}
          src={`/images/${Featured.TitleImage}`}
          alt="title"
          className={styles.titleImg}
        />
        <p className={styles.info}>
          <span className={styles.item}>{Featured.ReleaseYear}</span>
          <span className={styles.item}>{Featured.MpaRating}</span>
          <span className={styles.item}>
            {formatDuration(parseInt(Featured.Duration))}
          </span>
        </p>
        <p className={styles.descr}>{Featured.Description}</p>
        <div className={styles.btnGroup}>
          <button className={cx(styles.button, styles.play)}>Play</button>
          <button className={cx(styles.button, styles.more)}>More Info</button>
        </div>
      </div>
      <TrendingList data={TrendingNow} />
    </div>
  );
};
