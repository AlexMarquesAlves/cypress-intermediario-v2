/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
  viewportWidth: 1280,
  viewportHeight: 880,
})
