class detailProductPage {
  get colourRedProduct() {
    return $('//android.view.ViewGroup[@content-desc="red circle"]/android.view.ViewGroup');
  }

  get addToCartBtn() {
    return $("~Add To Cart button");
  }

  get counterPlusProduct() {
    return $('//android.view.ViewGroup[@content-desc="counter plus button"]/android.widget.ImageView');
  }

  get counterMinusProduct() {
    return $('//android.view.ViewGroup[@content-desc="counter minus button"]/android.widget.ImageView');
  }

  async stepAddToCartProduct() {
    await this.colourRedProduct.click();
    await this.counterPlusProduct.click();
    await this.addToCartBtn.click();
  }
}
export default new detailProductPage();
