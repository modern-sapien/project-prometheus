// const { test, expect } = require("@playwright/test");

// test.only("page playwright test", async function ({ page }) {
//   await page.goto("https://jsonplaceholder.typicode.com/");

//   const [retoolPage] = await Promise.all([
//     page.waitForEvent("popup"),
//     page
//       .locator('a[href = "https://tryretool.com/?utm_source=sponsor&utm_campaign=typicode"]')
//       .click(),
//   ]);
//   await expect(retoolPage).toHaveURL(/.*retool/);

//   const [mockendPage] = await Promise.all([
//     page.waitForEvent("popup"),
//     page
//       .locator("body > div:nth-child(2) > section:nth-child(2) > p:nth-child(4) > a:nth-child(1)")
//       .click(),
//   ]);
//   await expect(mockendPage).toHaveURL(/.*mockend/);

//   // const [megafamousPage] = await Promise.all([
//   //   page.waitForEvent("popup"),
//   //   page
//   //     .locator("section")
//   //     .filter({
//   //       hasText: "Sponsors JSONPlaceholder is supported by the following companies and Sponsors on",
//   //     })
//   //     .getByRole("link")
//   //     .nth(3)
//   //     .click(),
//   // ]);
//   // await expect(megafamousPage).toHaveURL(/.*megafamous/);

//   // page.locator('section', { has: page.locator('a[href = "https://mockend.com"]')}).click(),

// });

const { expect, test } = require("@playwright/test");

test.describe("sponsor related testing", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://jsonplaceholder.typicode.com/", {
      waitUntil: "domcontentloaded",
    });
  });

  test.only("all sponsors links have loaded, are navigable, sponsor pages load appropriately", async ({
    page,
  }) => {
    // await page.goto("https://jsonplaceholder.typicode.com/");

    const [retoolPage] = await Promise.all([
      // https://playwright.dev/docs/api/class-page#page-event-popup
      page.waitForEvent("popup"),
      page
        .locator('a[href = "https://tryretool.com/?utm_source=sponsor&utm_campaign=typicode"]')
        .isVisible(),

      page
        .locator('a[href = "https://tryretool.com/?utm_source=sponsor&utm_campaign=typicode"]')
        .click(),
    ]);
    await expect(retoolPage).toHaveURL(/.*retool/);
    // await retoolPage.close()

    const [mockendPage] = await Promise.all([
      page.waitForEvent("popup"),
      //  https://playwright.dev/docs/selectors
      // I highly recommend adopting data-test* attributes to create less brittle selectors as ids, classes & paths are prone
      page
        .locator("section")
        .filter({
          hasText:
            "Sponsors JSONPlaceholder is supported by the following companies and Sponsors on",
        })
        .getByRole("link")
        .nth(2)
        .click(),
    ]);
    await expect(mockendPage).toHaveURL(/.*mockend/);
    // await mockendPage.close()

    const [megafamousPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator('a[href="https://megafamous.com/buy-instagram-followers"]').isVisible(),
      page.locator('a[href="https://megafamous.com/buy-instagram-followers"]').click(),
    ]);
    await expect(megafamousPage).toHaveURL(/.*megafamous/);
    // await megafamousPage.close()
  });
});

test.only("other test", async ({ page }) => {
  await page.goto("https://jsonplaceholder.typicode.com/");
  const [mockendPage] = await Promise.all([
    page.waitForEvent("popup"),
    page
      .locator("section")
      .filter({
        hasText: "Sponsors JSONPlaceholder is supported by the following companies and Sponsors on",
      })
      .getByRole("link")
      .nth(2)
      .click(),
  ]);
  await expect(mockendPage).toHaveURL(/.*mockend/);
});
