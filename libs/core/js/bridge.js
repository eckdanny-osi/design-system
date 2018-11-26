// @preval

/**
 * Bridge to Sass Vars
 *
 * STOP! This file compiles to a simple object export of the Bootstrap 4 sass
 * variables ready for importing with our LibSass importer. If you want to
 * declare new design system directives use `core.js`.
 *
 * We are using `preval` to evaluate config values at build-time and distribute
 * the Design System (DS) config as simple JSON. This means node-safe syntax
 * only (no esm imports).
 */

const DS = require('./core')

/**
 * Helper to create Sass variables from JS Objects
 * @param {Object} map
 * @param {string} keyPrefix
 * @param {boolean} unit
 */
function toSass(map, keyPrefix = '', unit = false) {
  return Object.keys(map)
    .map(k => ({ key: k, value: map[k] }))
    .reduce(
      (acc, { key, value }, i) => ({
        ...acc,
        [`${keyPrefix}${key}`]: unit ? `${value}${unit}` : value,
      }),
      {}
    )
}

module.exports = {
  ...DS.colors,
  ...toSass(DS.grays, 'gray-'),
  ...toSass(DS.themeColors),
  spacer: `${DS.spacing.spacer}${DS.spacing.spacerUnit}`,
  ...toSass(DS.spacing.spacers, 'spacer-', DS.spacing.spacerUnit),
  ...toSass(DS.breakpoints, 'grid-breakpoint-', DS.breakpointUnit),
  ...DS.options,
}
