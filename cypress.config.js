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

      // กำหนดค่า mochawesome reporter โดยไม่ต้อง require Cypress
      require('cypress-mochawesome-reporter/plugin')(on);

      // Handle after:run without opening the report file
      on('after:run', (results) => {
        // ไม่ต้องใช้ xdg-open ใน GitHub Actions
        // ลบหรือคอมเมนต์คำสั่ง xdg-open ที่อาจเปิดรายงานในระบบ GUI
      });

      return config;
    },
  },
});
