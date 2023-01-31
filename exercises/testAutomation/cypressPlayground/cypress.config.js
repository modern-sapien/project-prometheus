const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://jsonplaceholder.typicode.com/",
    experimentalStudio: true,
    experimentalWebKitSupport: true,
    experimentalSessionAndOrigin: true,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
    "env": {
      "grepOmitFiltered": true
    }
  },
});
