import type { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createReduxStore } from "@/app/store/store";
import { SearchMoviesResponse, useGetMoviesInfiniteQuery } from "@/features/MoviesList";
import { Movie } from "@/entities/MovieTile";
import SearchMoviesContent from "./SearchMoviesContent";

jest.mock("@/features/MoviesList", () => ({
  ...jest.requireActual("@/features/MoviesList"),
  useGetMoviesInfiniteQuery: jest.fn(),
}));

jest.mock("react-virtuoso", () => ({
  VirtuosoGrid: ({
    data,
    itemContent,
  }: {
    data: Movie[];
    itemContent: (index: number, item: Movie) => ReactNode;
  }) => (
    <div>
      {data.map((item, index) => (
        <div key={item.imdbID || index}>{itemContent(index, item)}</div>
      ))}
    </div>
  ),
}));
let mockData: SearchMoviesResponse;

beforeAll(() => {
  mockData = {
    Search: [
      {
        Title: "Batman Begins",
        Year: "2005",
        imdbID: "tt0372784",
        Type: "movie",
        Poster: "N/A",
      },
    ],
    totalResults: "1",
    Response: "True",
  };
});

test("render SearchMoviesContent with mocked RTK Query data", () => {
  (useGetMoviesInfiniteQuery as jest.Mock).mockReturnValue({
    data: {
      pages: [mockData],
    },
    isFetching: false,
    isLoading: false,
    isFetchingNextPage: false,
    hasNextPage: false,
    fetchNextPage: jest.fn(),
  });

  render(
    <Provider
      store={createReduxStore({
        searchMoviesInput: {
          search: "Batman",
          type: undefined,
          year: undefined,
        },
      })}
    >
      <MemoryRouter>
        <SearchMoviesContent />
      </MemoryRouter>
    </Provider>,
  );

  expect(screen.getByTestId("movies-item")).toBeInTheDocument();
  expect(screen.getByTestId("movies-item")).toHaveTextContent("Batman Begins");
  screen.debug();
});
