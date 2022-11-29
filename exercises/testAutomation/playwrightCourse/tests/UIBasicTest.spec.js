const { test } = require("@playwright/test");

// browser information is passed from config file
test("browser context playwright test", async function ({ browser }) {
  // creating a new or fresh context when choosing a particular browser if not delcaring
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test("page playwright test", async function ({ page }) {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});
