import {
  searchMoviesInputActions,
  searchMoviesInputReducer,
  SearchMoviesInputState,
} from "./slice";

describe(`SearchMoviesInput's selectors`, () => {
  let initialTestState: SearchMoviesInputState;

  beforeAll(() => {
    initialTestState = { search: "Batman", type: "movie", year: 2022 };
  });

  it(`should handle setSearch`, () => {
    // expect(
    //   searchMoviesInputReducer(
    //     initialTestState,
    //     searchMoviesInputActions.setSearch("Batman"),
    //   ).search,
    // ).toBe("Batman");
    // ниже тот же пример упрощенно

    const action = searchMoviesInputActions.setSearch("Superman");
    const state = searchMoviesInputReducer(initialTestState, action);

    expect(state.search).toBe("Superman");
  });

  it(`should handle setType`, () => {
    const action = searchMoviesInputActions.setType("series");
    const state = searchMoviesInputReducer(initialTestState, action);

    expect(state.type).toBe("series");
  });

  it(`should handle setYear`, () => {
    const action = searchMoviesInputActions.setYear(2022);
    const state = searchMoviesInputReducer(initialTestState, action);

    expect(state.year).toBe(2022);
  });

  it(`should work when state is undefined`, () => {
    const actionYear = searchMoviesInputActions.setYear(2022);
    const actionType = searchMoviesInputActions.setType("series");
    const actionSearch = searchMoviesInputActions.setSearch("Superman");
    let state = searchMoviesInputReducer(undefined, actionYear);
    state = searchMoviesInputReducer(state, actionType);
    state = searchMoviesInputReducer(state, actionSearch);

    expect(state).toEqual({
      year: 2022,
      type: "series",
      search: "Superman",
    });
  });
});
