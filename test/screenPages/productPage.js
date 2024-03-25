class productPage {
  get productTittle() {
    return $('//android.widget.TextView[@text="Products"]');
  }
  get productCard() {
    return $('(//android.view.ViewGroup[@content-desc="store item"])[1]');
  }
}
export default new productPage();
