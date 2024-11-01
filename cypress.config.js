const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',   // ที่เก็บรายงาน  
    reportFilename: 'test-report',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss',
    charts: true,
    code: false,
    autoOpen: true,
    quiet: false,
    inline: true,
    saveJson: true,
    embeddedScreenshots: true
  }, 
  projectId: "hkh24s",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});