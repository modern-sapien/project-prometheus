// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  reporter: [
    [
      "html",
      {
        open: "on-failure",
        host: "localhost",
        port: 9223,
      },
    ],
  ],
};

module.exports = config;
