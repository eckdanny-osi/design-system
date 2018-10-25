import DS from './core'

const toSass = (map, keyPrefix = '', unit = false) => {
  return Object.keys(map)
    .map(k => ({ key: k, value: map[k] }))
    .reduce((acc, { key, value }, i) => {
      return {
        ...acc,
        [`${keyPrefix}${key}`]: unit ? `${value}${unit}` : value,
      }
    }, {})
}

export default {
  ...DS.colors,
  ...toSass(DS.grays, 'gray-'),
  ...toSass(DS.themeColors),
  spacer: `${DS.spacing.spacer}${DS.spacing.spacerUnit}`,
  ...toSass(DS.spacing.spacers, 'spacer-', DS.spacing.spacerUnit),
  ...toSass(DS.breakpoints, 'grid-breakpoint-', DS.breakpointUnit),
  ...DS.options,
}
