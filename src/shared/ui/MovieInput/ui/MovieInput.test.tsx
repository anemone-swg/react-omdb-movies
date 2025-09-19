import { fireEvent, render, screen } from "@testing-library/react";
import MovieInput from "./MovieInput";
import React, { useState } from "react";

describe("MovieInput", () => {
  test("работа input", () => {
    const Wrapper = () => {
      const [val, setVal] = useState("");
      return (
        <MovieInput value={val} onChange={(e) => setVal(e.target.value)} />
      );
    };
    render(<Wrapper />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    fireEvent.input(input, {
      target: { value: "Star Wars" },
    });
    expect(input).toHaveValue("Star Wars");
    screen.debug();
  });
});
