import headerPage from "../screenPages/headerPage";
import menuPage from "../screenPages/menuPage";

describe("Checkout Sceanrio", () => {
  beforeEach(async () => {
    await headerPage.sideMenu.click();
    await menuPage.loginMenu.click();
  });
  it("Checkout Product Sauce Labs Backpack 2 item", () => {});
});
