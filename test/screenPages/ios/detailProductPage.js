class detailProductPage {
  get colourRedProduct() {
    return $("~red circle");
  }

  get addToCartBtn() {
    return $("~Add To Cart button");
  }

  get counterPlusProduct() {
    return $("~counter plus button");
  }

  get counterMinusProduct() {
    return $("~counter minus button");
  }

  async stepAddToCartProduct() {
    await this.colourRedProduct.click();
    await this.counterPlusProduct.click();
    await this.addToCartBtn.click();
  }
}
export default new detailProductPage();
