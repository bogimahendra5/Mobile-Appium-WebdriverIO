class productPage {
  get productTittle() {
    return $('//XCUIElementTypeStaticText[@name="Products"]');
  }
  get productScrollBar() {
    return $('//XCUIElementTypeOther[@name="Vertical scroll bar, 2 pages"]');
  }
}
export default new productPage();
