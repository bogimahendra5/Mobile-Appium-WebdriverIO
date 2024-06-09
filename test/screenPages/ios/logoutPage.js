class logoutPage {
  // Button
  get logoutConfirmBtn() {
    return $('//XCUIElementTypeButton[@name="Log Out"]');
  }
  get logoutCancelBtn() {
    return $('//XCUIElementTypeButton[@name="Cancel"]');
  }
  get logoutOKbtn() {
    return $("~OK");
  }

  // Message and Alert
  get alertSuccessLogout() {
    return $('//XCUIElementTypeStaticText[@name="You are successfully logged out."]');
  }
}

export default new logoutPage();
