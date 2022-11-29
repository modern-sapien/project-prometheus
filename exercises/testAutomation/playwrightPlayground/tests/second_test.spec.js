// @ts-check
const { test, expect } = require("@playwright/test");

test("work through basics of playwright capabilities in uitestingplayground", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");

  // Intelligent role targetting / not brittle selectors
  await expect(page).toHaveTitle(/UI Test Automation Playground/);
  await page.getByRole("link", { name: "Dynamic ID" }).click();
  await page.getByRole("button", { name: "Button with Dynamic ID" }).click();
});

// Codegen created an event listener for dialog popup closure
test("handling popup closure", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  await page.getByRole("link", { name: "Class Attribute" }).click();
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Button" }).first().click();
  await page.getByRole("button", { name: "Button" }).nth(1).click();
  await page.getByRole("button", { name: "Button" }).nth(2).click();
});

// Playwright handles hidden layers well, second click fails
test("testing hidden layers", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  await page.getByRole("link", { name: "Hidden Layers" }).click();
  await page.locator("id=greenButton").click();
  // await page.locator("id=greenButton").click();
});

// test passes by waiting for page load, no handling necessary
test("page load delay", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  await page.getByRole("link", { name: "Load Delay" }).click();
  await page.getByRole("button", { name: "Button" }).click();
});

test("ajax delayed dynamic response", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  await page.getByRole("link", { name: "AJAX data" }).click();
  await page.locator("id=ajaxButton").click();

  const ajaxDataReturn = page.locator("class=bg-success");
  expect(ajaxDataReturn).toBeVisible;
});

test.only("untrustworthy click", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  await page.getByRole("link", { name: "Click" }).click();
  await page.getByRole("button", { name: "Button That Ignores DOM Click Event" }).click();

  const successButtonStatus = page.getByRole("button", {
    name: "Button That Ignores DOM Click Event",
  });

  await expect(successButtonStatus).toHaveAttribute("class", "btn btn-success");

  await successButtonStatus.screenshot({ path: "screenshot.png" });
});


