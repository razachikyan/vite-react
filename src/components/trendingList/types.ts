import { ITrendingDataItem } from "../../models/trendingData";

export interface TrendingListProps {
  data: Array<ITrendingDataItem>;
  onMovieClick: (movie: ITrendingDataItem) => void;
}
