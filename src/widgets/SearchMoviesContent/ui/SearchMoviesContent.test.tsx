import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createReduxStore } from "@/app/store/store";
import SearchMoviesContent from "./SearchMoviesContent";
import {
  SearchMoviesResponse,
  useGetMoviesInfiniteQuery,
} from "@/features/MoviesList";
import { MemoryRouter } from "react-router-dom";

jest.mock("@/features/MoviesList", () => ({
  ...jest.requireActual("@/features/MoviesList"),
  useGetMoviesInfiniteQuery: jest.fn(),
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
