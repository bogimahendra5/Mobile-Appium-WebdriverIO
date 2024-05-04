import loginPage from "./loginPage";

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
  get reviewOrderbtn() {
    return $("~Review Order button");
  }
  get checkoutReviewOrderCard() {
    return $('//android.widget.ScrollView[@content-desc="checkout review order screen"]/android.view.ViewGroup');
  }
  get placeOrderBtn() {
    return $("~Place Order button");
  }
  get checkoutCompleteText() {
    return $('//android.widget.TextView[@text="Checkout Complete"]');
  }
  get continueShoppingBtn() {
    return $("~Continue Shopping button");
  }

  async checkoutStep(fullname, city, zipcode, country, cardnumber, expirationdate, securitycode) {
    await this.fullnameField.setValue(fullname);
    await this.addressLineField.setValue(city);
    await this.zipCodeField.setValue(zipcode);
    await this.countryField.setValue(country);
    await this.toPaymentBtn.click();
    await this.cardNumberField.setValue(cardnumber);
    await this.expirationDate.setValue(expirationdate);
    await this.securityCodeField.setValue(securitycode);
    await this.reviewOrderbtn.click();
    await expect(this.checkoutReviewOrderCard).toBeDisplayed();
    await this.placeOrderBtn.click();
    await expect(this.checkoutCompleteText).toBeDisabled();
    await expect(this.continueShoppingBtn).toBeClickable();
  }
}

export default new chceckoutPage();
