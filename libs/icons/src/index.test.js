import * as Icons from './index'

describe('@cwds/icons', () => {
  it.each`
    component
    ${'Icon'}
    ${'ICON_NAMES'}
    ${'getIconFromContext'}
    ${'getIconContrast'}
  `('exports $component', ({ component }) => {
    expect(Icons[component]).toBeDefined()
  })
})
