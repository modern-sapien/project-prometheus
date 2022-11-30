const { test, expect } = require("@playwright/test");

// browser information is passed from config file
test("browser context playwright test", async function ({ browser }) {
  // creating a new or fresh context when choosing a particular browser if not delcaring
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  // targeting id selector & downloaded selectorshub
  await page.locator("#username").type("rahulshetty");
  await page.locator("[type='password']").type("learning");
  await page.locator("#signInBtn").click();
});

// login error message
test.only("login error message appears on failure", async function ({ browser }) {
  // creating a new or fresh context when choosing a particular browser if not delcaring
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("[type='password']").type("learning");
  await page.locator("#signInBtn").click();
  // auto waits until matching element is displayed
  // textContent() calls the text of the element to be displayed
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Empty username/password.");
});



// using default parameters
test("page playwright test", async function ({ page }) {
  await page.goto("https://google.com");
  // get title of page
  console.log("this is a log of the title: " + (await page.title()));

  await expect(page).toHaveTitle("Google");
});
