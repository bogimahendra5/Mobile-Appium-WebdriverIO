class productPage {
  get productTittle() {
    return $('//android.widget.TextView[@text="Products"]');
  }
  get productCard() {
    return $("//android.widget.ScrollView");
  }
}
export default new productPage();
