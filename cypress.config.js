const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId:'sfkizr',
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}',
    // baseUrl: 'http://localhost:8080', // Mantido comentado se não for usado
    setupNodeEvents(on, config) { // <--- Início da função
      // implement node event listeners here
    }, // <--- Fim da função com a chave '}' e a vírgula ',' (se houver mais propriedades depois)
  }, // <--- Fim do objeto e2e
}) // <--- Fim da chamada defineConfig