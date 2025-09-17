import { getUniqueMovies } from "./getUniqueMovies";
import { Movie } from "../../model/types/movie";

describe("getUniqueMovies", () => {
  const mockMovies: Movie[] = [
    {
      imdbID: "1",
      Title: "Movie 1",
      Year: "2020",
      Type: "movie",
      Poster: "N/A",
    },
    {
      imdbID: "1",
      Title: "Movie 1 duplicate",
      Year: "2020",
      Type: "movie",
      Poster: "N/A",
    },
    {
      imdbID: "2",
      Title: "Movie 2",
      Year: "2021",
      Type: "series",
      Poster: "N/A",
    },
  ];

  test("уберет дубликаты", () => {
    // expect(getUniqueMovies(mockMovies)).toEqual([
    //   {
    //     imdbID: "1",
    //     Title: "Movie 1",
    //     Year: "2020",
    //     Type: "movie",
    //     Poster: "N/A",
    //   },
    //   {
    //     imdbID: "2",
    //     Title: "Movie 2",
    //     Year: "2021",
    //     Type: "series",
    //     Poster: "N/A",
    //   },
    // ]);
    expect(getUniqueMovies(mockMovies)).toMatchSnapshot();
  });
});
