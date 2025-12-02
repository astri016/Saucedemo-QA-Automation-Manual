const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 10000,
    experimentalSessionAndOrigin: true,
  }
}
;
