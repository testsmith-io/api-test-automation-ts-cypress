import { defineConfig } from "cypress";

export default defineConfig( {
  e2e: {
    baseUrl: 'https://api.practicesoftwaretesting.com',
    setupNodeEvents ( on, config ) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },
  },
} );
