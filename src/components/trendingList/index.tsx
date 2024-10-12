import React from "react";
import styles from "./styles.module.scss";

interface ITrendingDataItem {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  VideoUrl: string;
  Description: string;
}

export const TrendingList: React.FC<{ data: Array<ITrendingDataItem> }> = ({
  data,
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
            <li key={item.Id} className={styles.item}>
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
