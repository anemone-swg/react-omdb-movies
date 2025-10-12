import type { Meta, StoryObj } from "@storybook/react-webpack5";
import SearchMoviesContent from "./SearchMoviesContent";

const meta = {
  title: "Widgets/SearchMoviesContent",
  component: SearchMoviesContent,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchMoviesContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
