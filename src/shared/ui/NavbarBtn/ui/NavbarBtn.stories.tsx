import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { MemoryRouter } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GiFilmStrip } from "react-icons/gi";
import NavbarBtn from "./NavbarBtn";
import { Routes } from "@/shared/config/route/routes";

const meta = {
  title: "Example/NavbarBtn",
  component: NavbarBtn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    to: { control: "text" },
    className: { control: "text" },
    icon: { control: false },
  },
} satisfies Meta<typeof NavbarBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    to: Routes.HOME,
    icon: IoHomeOutline,
  },
  decorators: [
    (Story, context) => (
      <MemoryRouter initialEntries={[context.args.to || "/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Movies: Story = {
  args: {
    to: Routes.MOVIES,
    icon: GiFilmStrip,
    label: "Фильмы",
  },
  decorators: [
    (Story, context) => (
      <MemoryRouter initialEntries={[context.args.to || "/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};
