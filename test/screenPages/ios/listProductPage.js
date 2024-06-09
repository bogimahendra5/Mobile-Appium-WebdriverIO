class listProductPage {
  get SauceLabsBackpack() {
    return $('//XCUIElementTypeStaticText[@name="store item text" and @label="Sauce Labs Backpack"]');
  }

  get SauceLabsBoltTShirt() {
    return $('//XCUIElementTypeStaticText[@name="store item text" and @label="Sauce Labs Bolt T-Shirt"]');
  }
}
export default new listProductPage();
