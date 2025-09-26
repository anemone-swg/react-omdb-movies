import type { Meta, StoryObj } from "@storybook/react-webpack5";
import MovieInput from "./MovieInput";
import { action } from "storybook/actions";

const meta = {
  title: "Example/MovieInput",
  component: MovieInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
} satisfies Meta<typeof MovieInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Movie: Story = {
  args: {
    value: "Star wars",
    placeholder: "Введите название...",
    onChange: action("Введен символ."),
  },
};
