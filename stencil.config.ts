import {resolve} from 'path';
import {Config} from '@stencil/core';
import {sass} from '@stencil/sass';
import {postcss} from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'heathenscript-ui-components',
  globalStyle: 'src/global/variables.css',
  plugins: [
    sass(),
    // postcss({
    //   plugins: [autoprefixer({
    //     browsers: ['last 2 versions'],
    //     cascade: false
    //   })]
    // })
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
      dir: 'www',
      buildDir: 'components',
      baseUrl: '/',
      indexHtml: 'index.html',
      serviceWorker: {
        maximumFileSizeToCacheInBytes: 50000,
      }, // disable service workers}
      // copy: [
      //   { src: }
      // ]
    },
  ],
};
