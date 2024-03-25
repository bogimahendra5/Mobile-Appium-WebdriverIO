import headerPage from "../screenPages/headerPage.js";
import loginPage from "../screenPages/loginPage.js";
import menuPage from "../screenPages/menuPage.js";
import productPage from "../screenPages/productPage.js";

describe("Login Scenario", async () => {
  beforeEach(async () => {
    await headerPage.sideMenu.click();
    await menuPage.loginMenu.click();
  });

  it("Login Failed Username", async () => {
    await loginPage.loginStep("bobocu@example.com", "10203040");
    await expect(loginPage.errorMessage).toBeDisplayed();
  });

  it("Login Failed Password", async () => {
    await loginPage.loginStep("bob@example.com", "10203050");
    await expect(loginPage.errorMessage).toBeDisplayed();
  });

  it("Login Success", async () => {
    await loginPage.loginStep("bob@example.com", "10203040");
    await expect(productPage.productTittle).toBeDisplayed();
    await expect(productPage.productCard).toBeDisplayed();
  });
});
