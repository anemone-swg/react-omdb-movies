import type { Meta, StoryObj } from "@storybook/react-webpack5";
import LinkBtn from "./LinkBtn";
import { Routes } from "@/shared/config/route/routes";

const meta = {
  title: "Shared/LinkBtn",
  component: LinkBtn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    to: { control: "text" },
    className: { control: "text" },
  },
} satisfies Meta<typeof LinkBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MoviesSearch: Story = {
  args: {
    to: Routes.MOVIES_SEARCH,
    children: "Поиск фильмов",
  },
};
