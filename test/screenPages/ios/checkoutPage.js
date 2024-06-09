import keyboardPage from "./keyboardPage.js";

class chceckoutPage {
  get fullnameField() {
    return $("~Full Name* input field");
  }
  get addressLineField() {
    return $("~Address Line 1* input field");
  }
  get cityField() {
    return $("~City* input field");
  }
  get zipCodeField() {
    return $("~Zip Code* input field");
  }
  get countryField() {
    return $("~Country* input field");
  }
  get toPaymentBtn() {
    return $("~To Payment button");
  }
  get cardNumberField() {
    return $("~Card Number* input field");
  }
  get expirationDate() {
    return $("~Expiration Date* input field");
  }
  get securityCodeField() {
    return $("~Security Code* input field");
  }
  get checkoutPaymentCardView() {
    return $('//XCUIElementTypeOther[@name="checkout payment screen"]/XCUIElementTypeScrollView');
  }
  get reviewOrderbtn() {
    return $("~Review Order button");
  }
  get checkoutReviewOrderTittle() {
    return $("~Review your order");
  }
  get placeOrderBtn() {
    return $("~Place Order button");
  }
  get checkoutCompleteText() {
    return $("~Checkout Complete");
  }
  get continueShoppingBtn() {
    return $("~Continue Shopping button");
  }

  async checkoutStep(fullname, address, city, zipcode, country, cardnumber, expirationdate, securitycode) {
    await this.fullnameField.setValue(fullname);
    await this.addressLineField.setValue(address);
    await this.cityField.setValue(city);
    await this.zipCodeField.setValue(zipcode);
    await this.countryField.setValue(country);
    await keyboardPage.ReturnBtn.click();
    await this.toPaymentBtn.click();
    await this.fullnameField.setValue(fullname);
    await this.cardNumberField.setValue(cardnumber);
    await this.expirationDate.setValue(expirationdate);
    await this.securityCodeField.setValue(securitycode);
    await this.checkoutPaymentCardView.click();
    await this.reviewOrderbtn.click();
    await this.reviewOrderbtn.click();
    await expect(this.checkoutReviewOrderTittle).toBeDisplayed();
    await this.placeOrderBtn.click();
  }
}

export default new chceckoutPage();
