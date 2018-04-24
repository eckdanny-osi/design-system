import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import uglify from 'rollup-plugin-uglify';

import pkg from './package.json';

const banner = `/**
 * Package: ${pkg.name}@${pkg.version}
 * Date:    ${new Date().toISOString()}
 */`;

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      banner,
    },
    {
      file: pkg.module,
      name: pkg.name,
      format: 'es',
      sourcemap: true,
      banner,
    },
  ],
  plugins: [
    external(),
    postcss({
      modules: true,
      //   inject: false,
      extract: true,
      sourceMap: true,
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    // uglify(),
  ],
};
