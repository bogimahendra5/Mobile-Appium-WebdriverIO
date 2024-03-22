class headerPage {
  get sideMenu() {
    return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView');
  }
  get tittleHeader() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]'
    );
  }
  get Chart() {
    return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView');
  }

  async sideMenuBtn() {
    await this.sideMenu().click();
  }
}
export default new headerPage();
