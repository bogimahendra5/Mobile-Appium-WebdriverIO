class cartPage {
  get removeItemBtn() {
    return $("~remove item");
  }
  get proceedToCheckout() {
    return $("~Proceed To Checkout button");
  }
}
export default new cartPage();
