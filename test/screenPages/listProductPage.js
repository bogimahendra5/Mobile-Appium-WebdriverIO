class listProductPage {
  get SauceLabsBackpack() {
    return $('//android.widget.TextView[@content-desc="store item text" and @text="Sauce Labs Fleece Jacket"]');
  }

  get SauceLabsBoltTShirt() {
    return $('//android.widget.TextView[@content-desc="store item text" and @text="Sauce Labs Bolt T-Shirt"]');
  }
}
