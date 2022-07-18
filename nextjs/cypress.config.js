const { defineConfig } = require("cypress");

const port = process.env.CYPRESS_HTTP_PORT || 80;
module.exports = defineConfig({

  reporter: "junit",

  reporterOptions: {
    mochaFile: "results/TEST-[hash].xml",
  },

  screenshotOnRunFailure: false,
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUri: `http://localhost:${port}`
  }
});
