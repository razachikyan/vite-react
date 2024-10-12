import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import cx from "classnames";

import styles from "./styles.module.scss";

const menuData = [
  { label: "Search", link: "/search", icon: "/icons/search.png" },
  { label: "Home", link: "/", icon: "/icons/home.png" },
  { label: "TV Shows", link: "/shows", icon: "/icons/shows.png" },
  { label: "Movies", link: "/movies", icon: "/icons/movies.png" },
  { label: "Genres", link: "/genres", icon: "/icons/genres.png" },
  { label: "Watch Later", link: "/later", icon: "/icons/later.png" },
];

export const Menu: React.FC<{ open: boolean; onOpen: () => void }> = ({
  onOpen,
  open,
}) => {
  const [visible, setVisible] = useState(open);
  const location = useLocation();

  return (
    <div
      onClick={(ev) => ev.stopPropagation()}
      onMouseEnter={() => onOpen()}
      className={cx(styles.menu, { [styles.open]: open })}
      onAnimationEnd={() => setVisible(open)}
    >
      {open && (
        <div className={cx(styles.account, { [styles.visible]: visible })}>
          <img
            src="/icons/user.svg"
            width={85}
            alt="ava"
            height={85}
            className={styles.ava}
          />
          <span className={styles.username}>Daniel</span>
        </div>
      )}
      <ul className={styles.list}>
        {menuData.map(({ label, icon, link }, i) => (
          <a href={link} key={i}>
            <li
              className={cx(styles.item, {
                [styles.active]: location.pathname === link,
              })}
            >
              <img src={icon} alt="icon" width={26} height={26} />
              {open && (
                <span
                  className={cx(styles.label, { [styles.visible]: visible })}
                >
                  {label}
                </span>
              )}
            </li>
          </a>
        ))}
      </ul>
      {open && (
        <div className={cx(styles.bottom, { [styles.visible]: visible })}>
          <span className={styles.control}>LANGUAGE</span>
          <span className={styles.control}>GET HELP</span>
          <span className={styles.control}>EXIT</span>
        </div>
      )}
    </div>
  );
};
