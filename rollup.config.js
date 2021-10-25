// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import jsx from 'acorn-jsx';

export default {
  tsconfig: false,
  input: 'src/js/index.ts',
  output: {
    dir: 'www/assets/js',
    format: 'cjs',
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    typescript({ module: 'CommonJS', jsx: 'preserve', lib: ["es5", "es6", "dom"], target: "es5" }),
    commonjs({ extensions: ['.js', '.ts'] }), // the ".ts" extension is required
  ],
};
