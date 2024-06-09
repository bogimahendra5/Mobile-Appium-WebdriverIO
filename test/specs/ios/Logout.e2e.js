import logoutPage from "../../screenPages/ios/logoutPage.js";
import menuPage from "../../screenPages/ios/menuPage.js";
import tabBarMenuPage from "../../screenPages/ios/tabBarMenuPage.js";

describe("Logout Scenario", async () => {
  beforeEach(async () => {
    await tabBarMenuPage.Menu.click();
    await menuPage.logoutMenu.click();
  });

  it("Logout Success", async () => {
    await logoutPage.logoutConfirmBtn.click();
    await expect(logoutPage.alertSuccessLogout).toBeDisplayed();
    await logoutPage.logoutOKbtn.click();
  });
});
