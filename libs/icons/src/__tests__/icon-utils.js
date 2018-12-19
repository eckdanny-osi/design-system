import { getIconFromContext, getIconContrast } from '..'

describe('icon-library', () => {
  describe('getIconFromContext', () => {
    it('maps context to icon name', () => {
      const cases = [
        ['success', 'check-circle'],
        ['info', 'info-circle'],
        ['warning', 'exclamation-triangle'],
        ['danger', 'exclamation-triangle'],
        ['anything', false],
      ]
      cases.forEach(([input, ouput]) => {
        expect(getIconFromContext(input)).toBe(ouput)
      })
    })
  })
})

describe('getIconContrast', () => {
  it('returns black or white depending on contrast', () => {
    expect(getIconContrast('primary')).toBe('white')
  })
})
