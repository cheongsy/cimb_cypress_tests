import { defineConfig } from 'cypress'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'
import nodePolyfills from '@esbuild-plugins/node-modules-polyfill'
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/dist/plugin'

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 5000,
    viewportWidth: 1440, // Default value: 1280
    viewportHeight: 720, // Default value: 720
    video: true,
    async setupNodeEvents(on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // implement node event listeners here
      await addCucumberPreprocessorPlugin(on, config)

      getCompareSnapshotsPlugin(on, config)

      on(
        'file:preprocessor',
        createBundler({
          plugins: [nodePolyfills(), createEsbuildPlugin(config)]
        })
      )

      return config
    },
    specPattern: 'cypress/e2e/portals/**/*.{features,feature}',
  },
})
