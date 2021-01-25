import {resolve} from 'path';
import {Config} from '@stencil/core';
import {sass} from '@stencil/sass';
import {postcss} from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'heathenscript-ui-components',
  globalStyle: 'src/components/global/global.scss',
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      empty: false,
      indexHtml: 'index.html',
      serviceWorker: {
        maximumFileSizeToCacheInBytes: 50000,
      }, // disable service workers}
      buildDir: 'components',
    },
  ],
};
