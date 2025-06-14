import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: './support/e2e.ts',
    specPattern: './tests/*',
    baseUrl: 'https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com',
  },
});
