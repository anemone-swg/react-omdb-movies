import type { Meta, StoryObj } from "@storybook/react-webpack5";
import SearchMoviesContent from "./SearchMoviesContent";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";

const mockMovies = [
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
  title: "Widgets/SearchMoviesContent",
  component: SearchMoviesContent,
  parameters: {
    layout: "fullscreen",
    mockData: [
      {
        url: "https://www.omdbapi.com/?apikey=903b94fa&s=Star+wars&page=1",
        method: "GET",
        status: 200,
        response: {
          Search: mockMovies,
          totalResults: 2,
        },
      },
    ],
  },
  decorators: [
    StoreDecorator({
      searchMoviesInput: {
        search: "Star wars",
        type: undefined,
        year: undefined,
      },
    }),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof SearchMoviesContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
