import { $, $$, browser } from "@wdio/globals";
import Page from "./page";
import { Routes } from "@/shared/config/route/routes";

class SearchPage extends Page {
  public get searchMovieInput() {
    return $('[data-testid="search-movie-input"]');
  }

  public get searchMovieBtn() {
    return $('[data-testid="search-movie-btn"]');
  }

  public get movies() {
    return $$('[data-testid="movie"]');
  }

  public get movieTitle() {
    return $('[data-testid="movie-title"]');
  }

  public get moviePage() {
    return $('[data-testid="movie-page"]');
  }

  public async searchMovie(search: string) {
    await this.searchMovieInput.setValue(search);
    await this.searchMovieBtn.click();

    await browser.waitUntil(async () => (await this.movies.length) > 0, {
      timeout: 10000,
      timeoutMsg: "Не удалось загрузить фильмы.",
    });
  }

  public async openMoviePage(search: string) {
    await this.searchMovie(search);
    await this.movies[0].click();
    await this.movieTitle.waitForDisplayed({ timeout: 10000 });
  }

  public open() {
    return super.open(Routes.MOVIES_SEARCH);
  }
}

export default new SearchPage();
