import headerPage from "../screenPages/headerPage.js";
import logoutPage from "../screenPages/logoutPage.js";
import menuPage from "../screenPages/menuPage.js";

describe("Logout Scenario", async () => {
  beforeEach(async () => {
    await headerPage.sideMenu.click();
    await menuPage.logoutMenu.click();
  });

  it("Logout Success", async () => {
    await logoutPage.logoutConfirmBtn.click();
    await expect(logoutPage.alertSuccessLogout).toBeDisplayed();
    await logoutPage.logoutConfirmBtn.click();
  });
});
