export { default as SearchMoviesInput } from "./ui/SearchMoviesInput";
export {
  searchMoviesInputReducer,
  searchMoviesInputActions,
} from "./model/slice";
export { selectSearch, selectType, selectYear } from "./model/selectors";
export type { SearchMoviesInputState } from "./model/types/SearchMoviesInputState";
