import { AppState } from "@/app/store/store";
import { selectSearch, selectType, selectYear } from "./selectors";

describe(`SearchMoviesInput's selectors`, () => {
  let mockState: Partial<AppState>;

  beforeAll(() => {
    mockState = {
      searchMoviesInput: { search: "Batman", type: "movie", year: 2022 },
    };
  });

  test(`selectSearch`, () => {
    expect(selectSearch(mockState as AppState)).toBe("Batman");
  });

  test(`selectType`, () => {
    expect(selectType(mockState as AppState)).toBe("movie");
  });

  test(`selectYear`, () => {
    expect(selectYear(mockState as AppState)).toBe(2022);
  });
});
