import HomePage from "../pages/home.page";

describe("home container", () => {
  it("should get home container", async () => {
    await HomePage.open();
    const container = HomePage.homePageContainer;
    await expect(container).toBeExisting();
    await expect(container).toMatchElementSnapshot("homePageContainer");
    // await HomePage.login("tomsmith", "SuperSecretPassword!");
    // await expect(SecurePage.flashAlert).toMatchElementSnapshot("flashAlert");
  });
});
