import DS from './index'

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

  describe('spacers', () => {
    it.each`
      key
      ${'0'}
      ${'1'}
      ${'2'}
      ${'3'}
      ${'4'}
      ${'5'}
    `('spacers[$key] should be defined', ({ key }) => {
      expect(DS.spacers[key]).toBeDefined()
    })
  })

  describe('gridBreakpoints', () => {
    it.each`
      key
      ${'xs'}
      ${'sm'}
      ${'md'}
      ${'lg'}
      ${'xl'}
    `('gridBreakpoints[$key] should be defined', ({ key }) => {
      expect(DS.gridBreakpoints[key]).toBeDefined()
    })
  })

  describe('options', () => {
    it.each`
      key
      ${'enableCaret'}
      ${'enableRounded'}
      ${'enableShadows'}
      ${'enableGradients'}
      ${'enableTransitions'}
      ${'enableHoverMediaQuery'}
      ${'enableGridClasses'}
      ${'enablePrintStyles'}
    `('options[$key] should be defined', ({ key }) => {
      expect(DS.options[key]).toBeDefined()
      expect([true, false]).toContain(DS.options[key])
    })
  })
})
