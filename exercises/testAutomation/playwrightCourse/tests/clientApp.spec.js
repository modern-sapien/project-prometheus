const { test } = require("@playwright/test");

// login error message
test("login error message appears on failure", async function ({ page }) {
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("anshika@gmail.com");
  await page.locator("#userPassword").type("Iamking@000");
  await page.locator("[value='Login']").click();

  // once all calls successfully made then proceed - not service based
  await page.waitForLoadState("networkidle");
  const titles = await page.locator(".card-body b").allTextContents();

  console.log(titles);
});
