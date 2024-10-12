import React from "react";
import { TrendingListProps } from "./types";

import styles from "./styles.module.scss";

export const TrendingList: React.FC<TrendingListProps> = ({
  data,
  onMovieClick,
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.name}>Trending Now</span>
      <div className={styles.carousel}>
        <ul
          style={{ minWidth: (data.length + 2) * 216 }}
          className={styles.list}
        >
          {data.map((item) => (
            <li
              key={item.Id}
              className={styles.item}
              onClick={() => onMovieClick(item)}
            >
              <img
                src={`images/${item.CoverImage}`}
                alt={item.Title}
                width={200}
                height={278}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
