import { $ } from "@wdio/globals";
import Page from "./page";
import { Routes } from "@/shared/config/route/routes";

class HomePage extends Page {
  public get homePageContainer() {
    return $('[data-testid="home-page-container"]');
  }

  // public async login(username: string, password: string) {
  //   await this.inputUsername.setValue(username);
  //   await this.inputPassword.setValue(password);
  //   await this.btnSubmit.click();
  // }

  public open() {
    return super.open(Routes.HOME);
  }
}

export default new HomePage();
