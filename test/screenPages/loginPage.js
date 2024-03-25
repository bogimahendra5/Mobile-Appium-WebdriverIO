class loginPage {
  //* Button Action
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

  //* Message Error
  get errorMessage() {
    return $('//android.widget.TextView[@text="Provided credentials do not match any user in this service."]');
  }

  async loginStep(user, pass) {
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.loginBtn.click();
  }
}
export default new loginPage();
