class logoutPage {
  // Button
  get logoutConfirmBtn() {
    return $('//android.widget.Button[@resource-id="android:id/button1"]');
  }
  get logoutCancelBtn() {
    return $('//android.widget.Button[@resource-id="android:id/button2"]');
  }

  // Message and Alert
  get alertSuccessLogout() {
    return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
  }
}

export default new logoutPage();
