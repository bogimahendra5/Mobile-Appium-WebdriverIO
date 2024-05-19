import cartPage from "../../screenPages/android/cartPage.js";
import checkoutPage from "../../screenPages/android/checkoutPage.js";
import detailProductPage from "../../screenPages/android/detailProductPage.js";
import headerPage from "../../screenPages/android/headerPage.js";
import listProductPage from "../../screenPages/android/listProductPage.js";
import loginPage from "../../screenPages/android/loginPage.js";
import logoutPage from "../../screenPages/android/logoutPage.js";
import menuPage from "../../screenPages/android/menuPage.js";

describe("Checkout Sceanrio", () => {
  beforeEach(async () => {
    await headerPage.sideMenu.click();
    await menuPage.loginMenu.click();
    await loginPage.loginStep("bob@example.com", "10203040");
  });

  it("Checkout Product Sauce Labs Backpack 2 item", async () => {
    await listProductPage.SauceLabsBackpack.click();
    await detailProductPage.stepAddToCartProduct();
    await headerPage.Cart.click();
    await cartPage.proceedToCheckout.click();
    await checkoutPage.checkoutStep("Mahendra", "Yogyakarta", "Bantul", "76373", "Indonesia", "099763768765123", "03/25", "123");
    await expect(checkoutPage.checkoutCompleteText).toBeDisplayed();
    await expect(checkoutPage.continueShoppingBtn).toBeDisplayed();
  });

  afterEach(async () => {
    await headerPage.sideMenu.click();
    await menuPage.logoutMenu.click();
    await logoutPage.logoutConfirmBtn.click();
  });
});
