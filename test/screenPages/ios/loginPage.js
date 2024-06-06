class loginPage {
  //* Button Action
  get loginTittle() {
    return $('//XCUIElementTypeStaticText[@name="Login"]');
  }
  get username() {
    return $("~Username input field");
  }
  get password() {
    return $("~Password input field");
  }
  get loginBtn() {
    return $("~Login button");
  }

  //* Message Error
  get errorMessage() {
    return $('//XCUIElementTypeStaticText[@name="Provided credentials do not match any user in this service."]');
  }

  async loginStep(user, pass) {
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.loginBtn.click();
  }
}
export default new loginPage();
