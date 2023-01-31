
// (async () => {
//   const browser = await chromium.launch()
//   const page = await browser.newPage()

//   // Change checklyhq.com to your site's URL,
//   // or, even better, define a SITE_URL environment variable
//   // to reuse it across your browser checks
//   await page.goto(process.env.SITE_URL || "https://jsonplaceholder.typicode.com/")


//   // Locate the first sponsor link retool
//   const retoolLink = await page
//     .locator("section")
//     .filter({
//       hasText: "Sponsors JSONPlaceholder is supported by the following companies and Sponsors on",
//     })
//     .getByRole("link")
//     .nth(1)
//     .click();
//   await Promise.all([page.waitForNavigation(), retoolLink.click()])
//   expect(await page.url()).toContain("/.*retool/)")
//   // Take a screenshot of the current page
//   await page.screenshot({ path: "screenshot1.jpg" })

//   // // Locate the second sponsor link mockend
//   // const mockendLink = page.locator("something_here")
//   // await Promise.all([page.waitForNavigation(), mockendLink.click()])
//   // expect(await page.url()).toContain("/pricing")
//   // await page.screenshot({ path: "screenshot2.jpg" })

//   // // Locate the third sponsor link megafamous
//   // const megafamousLink = page.locator("another_thing here")
//   // await Promise.all([page.waitForNavigation(), megafamousLink.click()])
//   // expect(await page.url()).toContain("/pricing")
//   // await page.screenshot({ path: "screenshot3.jpg" })


//   // Close the browser and end the session
//   await browser.close()
// })()
