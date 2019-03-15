import * as NamedExports from './index'

describe('@cwds/forms', () => {
  it.each`
    namedExport
    ${'CheckboxBank'}
    ${'RadioGroup'}
    ${'SelectList'}
  `('exports $namedExport', ({ namedExport }) => {
    expect(Object.keys(NamedExports)).toContain(namedExport)
  })
})
