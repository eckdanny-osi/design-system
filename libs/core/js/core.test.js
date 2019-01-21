import DS from './core'

describe('core', () => {
  describe('grays', () => {
    it.each`
      key
      ${'100'}
      ${'200'}
      ${'300'}
      ${'400'}
      ${'500'}
      ${'600'}
      ${'700'}
      ${'800'}
      ${'900'}
    `('grays[$key] should be defined', ({ key }) => {
      expect(DS.grays[key]).toBeDefined()
    })
  })

  describe('themeColors', () => {
    it.each`
      key
      ${'primary'}
      ${'secondary'}
      ${'accent'}
      ${'breath'}
      ${'success'}
      ${'info'}
      ${'warning'}
      ${'danger'}
      ${'light'}
      ${'dark'}
    `('themeColors[$key] should be defined', ({ key }) => {
      expect(DS.themeColors[key]).toBeDefined()
    })
  })

  describe('spacing', () => {
    it.each`
      key
      ${'0'}
      ${'1'}
      ${'2'}
      ${'3'}
      ${'4'}
      ${'5'}
    `('spacing.spacers[$key] should be defined', ({ key }) => {
      expect(DS.spacing.spacers[key]).toBeDefined()
    })
  })
})
