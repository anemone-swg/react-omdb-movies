import { ErrorBoundary } from "react-error-boundary";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import type { Movie } from "../model/types/movie";
import MoviesList from "./MoviesList";
import MoviesListFallback from "./MoviesListFallback";

const mockMovies: Movie[] = [
  {
    Title: "Star Wars: Episode IV - A New Hope",
    Year: "1977",
    imdbID: "tt0076759",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Star Wars: Episode V - The Empire Strikes Back",
    Year: "1980",
    imdbID: "tt0080684",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg",
  },
];

const meta = {
  title: "Features/MoviesList",
  component: MoviesList,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof MoviesList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithData: Story = {
  args: {
    data: mockMovies,
    isFetching: false,
  },
};

export const EmptyData: Story = {
  args: {
    data: [],
    isFetching: false,
  },
};

export const IsFetchingList: Story = {
  args: {
    isFetching: true,
  },
};

export const ListWithError: Story = {
  args: {
    isFetching: false,
    error: "Error",
  },
  decorators: [
    (Story) => (
      <ErrorBoundary FallbackComponent={MoviesListFallback}>
        <Story />
      </ErrorBoundary>
    ),
  ],
};
