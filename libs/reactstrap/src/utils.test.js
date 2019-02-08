import { Util } from './utils'
const { ROTATION } = Util

describe('ROTATION', () => {
  /* eslint-disable no-magic-numbers */
  it.each`
    key        | value
    ${'RIGHT'} | ${90}
    ${'FLIP'}  | ${180}
    ${'LEFT'}  | ${270}
  `('should define $key as $value', ({ key, value }) => {
    expect(ROTATION[key]).toEqual(value)
  })
})
