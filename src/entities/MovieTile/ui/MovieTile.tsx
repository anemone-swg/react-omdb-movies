import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Routes } from "@/shared/config/route/routes";
import { Movie } from "../model/types/movie";
import clsx from "clsx";

export interface MovieTileProps {
  movie: Movie;
  className?: string;
}

const MovieTile = ({ movie, className }: MovieTileProps) => {
  return (
    <Link
      data-testid="movie"
      key={movie.imdbID}
      to={Routes.getMovieSearchDetail(movie.imdbID)}
      className={clsx(
        className,
        "p-2 border rounded-lg overflow-hidden shadow flex flex-col justify-center items-center transform transition-transform duration-200 ease-in-out hover:scale-[1.01] hover:shadow-lg",
      )}
    >
      <img
        loading="lazy"
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
        alt={movie.Title}
        className="w-full max-h-64 object-contain"
        onError={(e) => {
          const img = e.currentTarget;
          if (img.src !== window.location.origin + "/no-image.jpg") {
            img.src = "/no-image.jpg";
          }
        }}
      />
      <div className="pt-2">
        <h2 data-testid="movies-item" className="font-bold text-center">
          {movie.Title}
        </h2>
        <p className="text-sm text-gray-500 text-center">
          {movie.Year} ({movie.Type})
        </p>
      </div>
    </Link>
  );
};

export default memo(MovieTile);
