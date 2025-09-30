import { $ } from "@wdio/globals";
import Page from "./page";
import { Routes } from "@/shared/config/route/routes";

class HomePage extends Page {
  public get homePageContainer() {
    return $('[data-testid="home-page-container"]');
  }

  public open() {
    return super.open(Routes.HOME);
  }
}

export default new HomePage();
