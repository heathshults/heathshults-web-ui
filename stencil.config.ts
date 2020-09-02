import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'heathenscript-ui-components',
  globalStyle: 'src/components/global/global.scss',
  plugins: [
    sass(),
    postcss({
      plugins: [
        autoprefixer({
          overrideBrowserslist : ['>=1%'],
          cascade: false
        })
      ] //,
      // the line below automatically imports these files when compiling sass.
      // we can put our main global, base and tools here. Postcss likes .pcss
      // injectGlobalPaths: [
      //   'src/globals/variables.pcss',
      //   'src/globals/mixins.pcss'
      // ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
}
