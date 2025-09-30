import { MemoryRouter } from "react-router-dom";
import type { Decorator } from "@storybook/react";
import { Routes } from "@/shared/config/route/routes";

export const RouterDecorator: Decorator = (Story, context) => {
  const initialPath = context.args?.to ?? Routes.HOME;

  return (
    <MemoryRouter initialEntries={[initialPath]}>
      <Story />
    </MemoryRouter>
  );
};
