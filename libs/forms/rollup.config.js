import { mkRollupConfig } from '../../scripts/rollup-utils'
import pkg from './package.json'

module.exports = {
  ...mkRollupConfig(pkg),
  input: 'compiled/index.js',
}
