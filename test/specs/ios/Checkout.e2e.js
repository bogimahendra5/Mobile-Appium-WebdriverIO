import cartPage from "../../screenPages/ios/cartPage.js";
import checkoutPage from "../../screenPages/ios/checkoutPage.js";
import detailProductPage from "../../screenPages/ios/detailProductPage.js";
import tabBarMenuPage from "../../screenPages/ios/tabBarMenuPage.js";
import listProductPage from "../../screenPages/ios/listProductPage.js";
import loginPage from "../../screenPages/ios/loginPage.js";
import logoutPage from "../../screenPages/ios/logoutPage.js";
import menuPage from "../../screenPages/ios/menuPage.js";

describe("Checkout Sceanrio", () => {
  beforeEach(async () => {
    await tabBarMenuPage.Menu.click();
    await menuPage.loginMenu.click();
    await loginPage.loginStep("bob@example.com", "10203040");
  });

  it("Checkout Product Sauce Labs Backpack 2 item", async () => {
    await listProductPage.SauceLabsBackpack.click();
    await detailProductPage.stepAddToCartProduct();
    await tabBarMenuPage.Cart.click();
    await cartPage.proceedToCheckout.click();
    await checkoutPage.checkoutStep("Mahendra", "Yogyakarta", "Bantul", "76373", "Indonesia", "325812657568789", "0325", "123");
    await expect(checkoutPage.checkoutCompleteText).toBeDisplayed();
    await expect(checkoutPage.continueShoppingBtn).toBeDisplayed();
  });

  afterEach(async () => {
    await tabBarMenuPage.Menu.click();
    await menuPage.logoutMenu.click();
    await logoutPage.logoutConfirmBtn.click();
  });
});
