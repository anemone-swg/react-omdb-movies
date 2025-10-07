import type { contentType } from "@/shared/types/contentType";

export interface SearchMoviesInputState {
  search: string;
  type: contentType;
  year: number | undefined;
}
