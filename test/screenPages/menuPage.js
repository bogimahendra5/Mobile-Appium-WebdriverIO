class menuPage {
  get catalogMenu() {
    return $("~menu item catalog");
  }
  get webviewMenu() {
    return $("~menu item webview");
  }
  get loginMenu() {
    return $('//android.widget.TextView[@text="Log In"]');
  }
  get logutMenu() {
    return $('//android.widget.TextView[@text="Log Out"]');
  }

  async loginMenuBtn() {
    await this.loginMenu.click();
  }
}

export default new menuPage();
