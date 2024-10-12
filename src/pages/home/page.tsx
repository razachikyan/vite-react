import { useState, useEffect } from "react";
import cx from "classnames";
import data from "../../data.json";
import { TrendingList } from "../../components/trendingList";
import { Menu } from "../../components/menu";
import { formatDuration, sortTrends } from "../../utils/helpers";

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

const HomePage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [sortedTrendingMovies, setSortedTrendingMovies] = useState<
    ITrendingDataItem[]
  >([]);
  const [featuredMovie, setFeaturedMovie] = useState<ITrendingDataItem | null>(
    null
  );
  const { Featured, TrendingNow } = data;

  const handleMovieClick = (movie: ITrendingDataItem) => {
    setFeaturedMovie(movie);
    sessionStorage.setItem("lastViewedMovieId", movie.Id);
    setIsVideoOpen(false);

    setTimeout(() => {
      setIsVideoOpen(true);
    }, 2000);
  };

  useEffect(() => {
    const lastViewedId = sessionStorage.getItem("lastViewedMovieId");
    if (lastViewedId) {
      const lastViewedMovie = TrendingNow.find(
        (movie) => movie.Id === lastViewedId
      );
      if (lastViewedMovie) {
        setFeaturedMovie(lastViewedMovie);
      }
    }

    const sortedMovies = sortTrends(TrendingNow);

    setSortedTrendingMovies(sortedMovies);
  }, [TrendingNow]);

  useEffect(() => {
    setTimeout(() => {
      document.body.className = "";
    }, 500);
  }, []);

  return (
    <div className={styles.layout}>
      <Menu />
      <div className={styles.central}>
        <span className={styles.subtitle}>MOVIE</span>
        <>
          <h1 className={styles.title}>
            {featuredMovie ? featuredMovie.Title : Featured.Title}
          </h1>
          <img
            width={683}
            height={84}
            src={`/images/${
              featuredMovie ? featuredMovie.TitleImage : Featured.TitleImage
            }`}
            alt="title"
            className={styles.titleImg}
          />
          <p className={styles.info}>
            <span className={styles.item}>
              {featuredMovie ? featuredMovie.ReleaseYear : Featured.ReleaseYear}
            </span>
            <span className={styles.item}>
              {featuredMovie ? featuredMovie.MpaRating : Featured.MpaRating}
            </span>
            <span className={styles.item}>
              {formatDuration(
                parseInt(
                  featuredMovie ? featuredMovie.Duration : Featured.Duration
                )
              )}
            </span>
          </p>
          <p className={styles.descr}>
            {featuredMovie ? featuredMovie.Description : Featured.Description}
          </p>
          <div className={styles.btnGroup}>
            <button
              disabled={!featuredMovie}
              className={cx(styles.button, styles.play)}
              onClick={() => setIsVideoOpen(true)}
            >
              Play
            </button>
            <button className={cx(styles.button, styles.more)}>
              More Info
            </button>
          </div>
        </>
      </div>
      <TrendingList
        data={sortedTrendingMovies}
        onMovieClick={handleMovieClick}
      />
      {isVideoOpen && featuredMovie && (
        <div className={styles.videoContainer}>
          <video
            autoPlay
            className={styles.videoPlayer}
            onEnded={() => setIsVideoOpen(false)}
          >
            <source src={featuredMovie.VideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default HomePage;
