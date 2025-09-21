import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createReduxStore } from "@/app/store/store";
import SearchMoviesContent from "./SearchMoviesContent";
import { SearchMoviesResponse, useGetMoviesQuery } from "@/features/MoviesList";
import { MemoryRouter } from "react-router-dom";

jest.mock("@/features/MoviesList", () => ({
  ...jest.requireActual("@/features/MoviesList"),
  useGetMoviesQuery: jest.fn(),
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
  (useGetMoviesQuery as jest.Mock).mockReturnValue({
    data: mockData,
    isFetching: false,
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
