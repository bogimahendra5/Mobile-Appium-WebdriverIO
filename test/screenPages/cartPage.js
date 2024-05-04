class cartPage {
  get removeItemBtn() {
    return $('//android.widget.TextView[@text="Remove Item"]');
  }
  get proceedToCheckout() {
    return $("~Proceed To Checkout button");
  }
}
