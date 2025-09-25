import SearchPage from "../pages/search.page";

describe("search", () => {
  it("should search for movies", async () => {
    await SearchPage.open();
    await SearchPage.searchMovie("Star wars");
    const length = await SearchPage.movies.length;
    expect(length).toBeGreaterThan(0);
  });

  it("should search for movies and open first movie", async () => {
    await SearchPage.open();
    await SearchPage.openMoviePage("Star wars");
    const moviePage = SearchPage.moviePage;
    await expect(moviePage).toMatchElementSnapshot("moviePageStarWars");
  });
});
