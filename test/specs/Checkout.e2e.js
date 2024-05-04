import cartPage from "../screenPages/cartPage.js";
import checkoutPage from "../screenPages/checkoutPage.js";
import detailProductPage from "../screenPages/detailProductPage.js";
import headerPage from "../screenPages/headerPage.js";
import listProductPage from "../screenPages/listProductPage.js";
import loginPage from "../screenPages/loginPage.js";
import logoutPage from "../screenPages/logoutPage.js";
import menuPage from "../screenPages/menuPage.js";

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
