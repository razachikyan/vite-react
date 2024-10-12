import { ITrendingDataItem } from "../models/trendingData";

export function formatDuration(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return `${hours}h ${minutes}m`;
}

export const sortTrends = (
  items: Array<ITrendingDataItem>
): Array<ITrendingDataItem> => {
  const lastViewedId = sessionStorage.getItem("lastViewedMovieId");

  if (!lastViewedId) return items;

  const lastViewedItem = items.find((item) => item.Id === lastViewedId);
  const otherItems = items.filter((item) => item.Id !== lastViewedId);

  if (lastViewedItem) return [lastViewedItem, ...otherItems];

  return otherItems;
};
