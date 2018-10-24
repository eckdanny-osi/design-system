import DS, { getSpacers, getBreakpoints } from './core'

const breakpoints = Object.keys(DS.breakpoints)
  .map(key => ({ key, value: DS.breakpoints[key] }))
  .reduce((acc, kv) => {
    return {
      ...acc,
      [kv.key]: `${kv.value}px`,
    }
  }, {})

export default {
  ...DS.colors,
  ...DS.grays,
  ...DS.themeColors,
  spacer: `${DS.spacer}rem`,
  ...DS.spacers,
  ...breakpoints,
  ...DS.options,
}
