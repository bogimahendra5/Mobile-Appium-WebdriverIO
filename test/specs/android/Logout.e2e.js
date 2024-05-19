import headerPage from "../../screenPages/android/headerPage.js";
import logoutPage from "../../screenPages/android/logoutPage.js";
import menuPage from "../../screenPages/android/menuPage.js";

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
