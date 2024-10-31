const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: true
  },
  video: true, // เปิดการบันทึกวิดีโอ
  videosFolder: 'cypress/videos', // โฟลเดอร์สำหรับบันทึกวิดีโอ
  screenshotsFolder: 'cypress/screenshots', // โฟลเดอร์สำหรับบันทึกภาพหน้าจอ
  projectId: "hkh24s",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});