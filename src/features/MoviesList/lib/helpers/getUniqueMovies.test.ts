import { getUniqueMovies } from "./getUniqueMovies";
import { Movie } from "../../model/types/movie";

describe("getUniqueMovies", () => {
  const mockMovies1: Movie[] = [
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

  const mockMovies2: Movie[] = [
    {
      imdbID: "1",
      Title: "Movie 1",
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

  const mockMovies3: Movie[] = [
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
      imdbID: "1",
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
    expect(getUniqueMovies(mockMovies1)).toMatchSnapshot();
  });
  test("нет дубликатов", () => {
    expect(getUniqueMovies(mockMovies2)).toEqual(mockMovies2);
  });
  test("все дубликаты", () => {
    expect(getUniqueMovies(mockMovies3)).toEqual([mockMovies3[0]]);
  });
});
