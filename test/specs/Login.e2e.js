import headerPage from "../screenPages/headerPage.js";
import loginPage from "../screenPages/loginPage.js";

describe("Login Scenario", async () => {
  // beforeEach(async () => {

  // });
  it("Login Success", async () => {
    headerPage.sideMenuBtn();
    await driver.pause(2000);
    loginPage.loginStep("bob@example.com", "102030400");
    await expect($('//android.widget.TextView[@text="Products"]')).toHaveText("Products");
  });
});
