import { memo, useMemo } from "react";
import clsx from "clsx";
import { VirtuosoGrid } from "react-virtuoso";
import { getUniqueMovies } from "../lib/helpers/getUniqueMovies";
import styles from "./MoviesList.module.scss";
import { type Movie, MovieTile } from "@/entities/MovieTile";
import { Skeleton } from "@/shared/ui/Skeleton";

export interface MoviesListProps {
  data?: Movie[];
  isFetching: boolean;
  error?: string;
}

const MoviesList = ({ data, isFetching, error }: MoviesListProps) => {
  if (error) throw new Error(error);

  const uniqueMovies = useMemo(
    () => (data ? getUniqueMovies(data) : []),
    [data],
  );

  const items = useMemo(() => {
    const skeletonCount = isFetching ? 4 : 0;
    return [
      ...uniqueMovies,
      ...Array.from({ length: skeletonCount }).map(() => null),
    ];
  }, [uniqueMovies, isFetching]);

  return (
    <VirtuosoGrid
      data={items}
      computeItemKey={(index, item) =>
        item ? item.imdbID : `skeleton-${index}`
      }
      itemContent={(_, item) =>
        item ? (
          <MovieTile movie={item} className={styles.tile_virt_height} />
        ) : (
          <Skeleton
            className={clsx(
              styles.tile_virt_height,
              "p-2 rounded-lg overflow-hidden shadow flex flex-col justify-center items-center",
            )}
          />
        )
      }
      listClassName="grid grid-cols-2 md:grid-cols-4 gap-4"
      useWindowScroll
      endReached={undefined}
    />
  );
};

export default memo(MoviesList);
