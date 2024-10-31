const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hkh24s",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});