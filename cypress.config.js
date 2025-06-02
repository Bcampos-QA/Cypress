const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {// Altere o specPattern para incluir sua pasta 'integration'
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}', // Ou apenas '*.js', '*.jsx', etc.
    // Se você tiver um baseUrl, configure-o aqui
    // baseUrl: 'http://localhost:8080',
    setupNodeEvents(on, config) {
      // implement node event listeners here},
})
