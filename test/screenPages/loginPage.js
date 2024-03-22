import menuPage from "./menuPage.js";

class loginPage {
  get loginTittle() {
    return $('(//android.widget.TextView[@text="Login"])[1]');
  }
  get username() {
    return $('//android.widget.EditText[@content-desc="Username input field"]');
  }
  get password() {
    return $("~Password input field");
  }
  get loginBtn() {
    return $("~Login button");
  }

  async loginStep(user, pass) {
    await menuPage.loginMenuBtn();
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.loginBtn.click();
    await driver.pause(2000);
  }
}
export default new loginPage();
