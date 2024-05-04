class detailProductPage {
  get colourProduct() {
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
}
export default new detailProductPage();
