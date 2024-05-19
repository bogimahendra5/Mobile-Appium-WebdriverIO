class headerPage {
  get sideMenu() {
    return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView');
  }
  get tittleHeader() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]'
    );
  }
  get Cart() {
    return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView');
  }
}
export default new headerPage();
