class menuPage {
  get catalogMenu() {
    return $("~menu item catalog");
  }
  get webviewMenu() {
    return $("~menu item webview");
  }
  get loginMenu() {
    return $("~menu item log in");
  }
  get logoutMenu() {
    return $("~menu item log out");
  }
}

export default new menuPage();
